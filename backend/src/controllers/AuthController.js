const express = require('express');
const encrypt = require('js-sha1');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const fs = require('fs');
const { promisify } = require('util');
const path = require('path');

const mailer = require('../services/mailer');

const { Accounts } = require('../models');
const {
  validateAccountSignUp,
  validateAccountSignIn,
  validateAccountChangePassword,
} = require('../validators/account');
const { getMessage } = require('../helpers/messages');
const {
  generateJwt,
  verifyJwt,
  generateRefreshJwt,
  verifyRefreshJwt,
  getTokenFromHeaders,
} = require('../helpers/jwt');

const { checkJwt } = require('../middlewares/jwt');

const { upload } = require('../middlewares/multer');

const router = express.Router();
const saltRounds = 10;

router.post('/sign-in', validateAccountSignIn, async (req, res) => {
  const { email, password } = req.body;

  const findAccount = await Accounts.findOne({ where: { email } });

  const match = findAccount
    ? bcrypt.compareSync(password, findAccount.password)
    : null;
  if (!match) return res.jsonBadRequest(getMessage('account.signin.failed'));

  const token = generateJwt({ id: findAccount.id });
  const refreshToken = generateRefreshJwt({
    id: findAccount.id,
    version: findAccount.jwtVersion,
  });

  return res.jsonOK(findAccount, getMessage('account.signin.success'), {
    token,
    refreshToken,
  });
});

router.post('/sign-up', validateAccountSignUp, async (req, res) => {
  const { nickname, password, email } = req.body;

  const checkEmail = await Accounts.findOne({ where: { email } });

  if (checkEmail) {
    return res.jsonBadRequest(getMessage('account.signup.email_exists'));
  }

  const hash = bcrypt.hashSync(password, saltRounds);

  const newAccount = await Accounts.create({
    nickname,
    password: hash,
    email,
  });

  const token = generateJwt({ id: newAccount.id });
  const refreshToken = generateRefreshJwt({
    id: newAccount.id,
    version: newAccount.jwtVersion,
  });

  return res.jsonOK(newAccount, getMessage('account.signup.sucess'), {
    token,
    refreshToken,
  });
});

router.get('/profile-info', checkJwt, async (req, res) => {
  const { account_id } = req;

  const getProfile = await Accounts.findOne({ where: { id: account_id } });

  return res.jsonOK(getProfile);
});

router.put(
  '/password',
  checkJwt,
  validateAccountChangePassword,
  async (req, res) => {
    const { body } = req;
    const { password } = body;
    const fields = ['password'];
    const token = getTokenFromHeaders(req.headers);

    try {
      if (!token) {
        return res.jsonUnauthorized(
          null,
          getMessage('response.json_invalid_token')
        );
      }

      const decoded = verifyJwt(token);

      const findAccount = await Accounts.findByPk(decoded.id);
      if (!findAccount)
        return res.jsonUnauthorized(
          null,
          getMessage('response.json_invalid_token')
        );

      fields.map((fieldName) => {
        const newValue = body[fieldName];
        if (newValue) findAccount[fieldName] = newValue;
      });

      const hash = crypto.createHash('sha1').update(password).digest('hex');

      await findAccount.update({
        password: hash,
      });

      return res.jsonOK(
        findAccount,
        getMessage('account.settings.password.sucess')
      );
    } catch (error) {
      console.log(error);
    }
  }
);

router.post('/forgot', async (req, res) => {
  const { email } = req.body;
  try {
    const findAccount = await Accounts.findOne({ where: { email } });

    if (!findAccount)
      return res.jsonBadRequest(
        null,
        getMessage('account.forgot_password.email_notexists')
      );

    const forgotToken = crypto.randomBytes(20).toString('hex');

    const now = new Date();
    now.setHours(now.getHours() + 1);

    await findAccount.update({
      passwordResetToken: forgotToken,
      passwordResetExpires: now,
    });

    mailer.sendMail(
      {
        to: email,
        from: 'hatiaac@gmail.com',
        template: 'auth/forgot_password',
        context: { forgotToken },
      },
      (error) => {
        console.log(error);
        if (error)
          return res.jsonBadRequest(
            null,
            getMessage('response.json_server_error')
          );
      }
    );
    return res.jsonOK(email, getMessage('account.forgot_password.sucess'));
  } catch (error) {
    return res.jsonBadRequest(null, getMessage('response.json_server_error'));
  }
});

router.post('/reset', async (req, res) => {
  const { email, token, password } = req.body;

  try {
    const findAccount = await Accounts.findOne({
      where: { email },
    });

    if (!findAccount)
      return res.jsonBadRequest(
        null,
        getMessage('account.reset_password.email_notexists')
      );

    if (token !== findAccount.passwordResetToken)
      return res.jsonUnauthorized(
        null,
        getMessage('account.reset_password.invalid_token')
      );

    const now = new Date();

    if (now > findAccount.passwordResetExpires)
      return res.jsonBadRequest(
        null,
        getMessage('account.reset_password.passwordResetExpires')
      );

    const hash = crypto.createHash('sha1').update(password).digest('hex');

    await findAccount.update({
      password: hash,
    });

    res.jsonOK(findAccount);
  } catch (error) {
    console.log(error);
    return res.jsonBadRequest(null);
  }
});

router.put('/profile_info', checkJwt, async (req, res) => {
  const { body } = req;
  const fields = ['rlname', 'location'];
  const token = getTokenFromHeaders(req.headers);

  if (!token) {
    return res.jsonUnauthorized(
      null,
      getMessage('response.json_invalid_token')
    );
  }

  const decoded = verifyJwt(token);

  const findAccount = await Accounts.findByPk(decoded.id);
  if (!findAccount)
    return res.jsonUnauthorized(
      null,
      getMessage('response.json_invalid_token')
    );

  fields.map((fieldName) => {
    const newValue = body[fieldName];
    if (newValue) findAccount[fieldName] = newValue;
  });

  await findAccount.save();
  return res.jsonOK(findAccount, getMessage('account.settings.profile_sucess'));
});

router.post('/profile_name', checkJwt, async (req, res) => {
  const { body } = req;
  const { profileName } = body;

  try {
    const token = getTokenFromHeaders(req.headers);

    if (!token) {
      return res.jsonUnauthorized(
        null,
        getMessage('response.json_invalid_token')
      );
    }

    const decoded = verifyJwt(token);

    const findAccount = await Accounts.findByPk(decoded.id);
    if (!findAccount)
      return res.jsonUnauthorized(
        null,
        getMessage('response.json_invalid_token')
      );

    const checkProfileName = await Accounts.findOne({ where: { profileName } });
    if (checkProfileName)
      return res.jsonBadRequest(
        null,
        getMessage('account.settings.profile_name_exists')
      );

    await findAccount.update({
      profileName,
    });

    res.jsonOK(
      findAccount.profileName,
      getMessage('account.settings.avatar_success')
    );
  } catch (error) {
    return res.jsonBadRequest(null, error);
  }
});

router.post('/refresh', async (req, res) => {
  const token = getTokenFromHeaders(req.headers);
  if (!token) {
    return res.jsonUnauthorized(
      null,
      getMessage('response.json_invalid_token')
    );
  }

  try {
    const decoded = verifyRefreshJwt(token);
    const findAccount = await Accounts.findByPk(decoded.id);
    if (!findAccount)
      return res.jsonUnauthorized(
        null,
        getMessage('response.json_invalid_token')
      );

    if (decoded.version !== findAccount.jwtVersion)
      return res.jsonUnauthorized(
        null,
        getMessage('response.json_invalid_token')
      );

    const meta = {
      token: generateJwt({ id: findAccount.id }),
    };

    return res.jsonOK(null, null, meta);
  } catch (error) {
    return res.jsonUnauthorized(
      null,
      getMessage('response.json_invalid_token')
    );
  }
});

router.post('/avatar', checkJwt, upload.single('avatar'), async (req, res) => {
  try {
    const token = getTokenFromHeaders(req.headers);

    if (!token) {
      return res.jsonUnauthorized(
        null,
        getMessage('response.json_invalid_token')
      );
    }

    const decoded = verifyJwt(token);

    const findAccount = await Accounts.findByPk(decoded.id);
    if (!findAccount)
      return res.jsonUnauthorized(
        null,
        getMessage('response.json_invalid_token')
      );

    const finalFileName = req.file;

    await findAccount.update({
      avatar: `uploads/${finalFileName.filename}`,
    });

    res.jsonOK(findAccount, getMessage('account.settings.avatar_success'));
  } catch (error) {
    return res.jsonBadRequest(null, error);
  }
});

router.get('/avatar', checkJwt, async (req, res) => {
  try {
    const token = getTokenFromHeaders(req.headers);

    if (!token) {
      return res.jsonUnauthorized(
        null,
        getMessage('response.json_invalid_token')
      );
    }

    const decoded = verifyJwt(token);

    const findAccount = await Accounts.findByPk(decoded.id);
    if (!findAccount)
      return res.jsonUnauthorized(
        null,
        getMessage('response.json_invalid_token')
      );

    const { avatar } = findAccount;

    if (avatar !== '') {
      const URL_AVATAR = `http://localhost:3001/${avatar}`;
      res.jsonOK(URL_AVATAR);
    } else {
      res.jsonOK(findAccount);
    }
  } catch (error) {
    return res.jsonBadRequest(null, error);
  }
});

router.delete('/avatarDelete', checkJwt, async (req, res) => {
  try {
    const token = getTokenFromHeaders(req.headers);

    if (!token) {
      return res.jsonUnauthorized(null, 'Invalid token');
    }

    const decoded = verifyJwt(token);

    const findAccount = await Accounts.findByPk(decoded.id);
    if (!findAccount) return res.jsonUnauthorized(null, 'Invalid token.');

    const { avatar } = findAccount;
    if (avatar !== '') {
      await findAccount.update({
        avatar: '',
      });

      const removeUpload = avatar.slice(8, avatar.length);

      promisify(fs.unlink)(
        path.resolve(__dirname, '..', '..', 'uploads', removeUpload)
      );

      res.jsonOK(accounts, 'avatar deletado.');
    } else {
      res.jsonBadRequest(null, 'não foi encontrado nenhum avatar.');
    }
  } catch (error) {
    return res.jsonBadRequest(null, error);
  }
});

module.exports = router;
