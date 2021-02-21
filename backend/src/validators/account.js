const Joi = require('@hapi/joi');
const { defaultOptions } = './default';
const { getValidatorError } = require('../helpers/validator');

const rules = {
  nickname: Joi.string().min(6).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().alphanum().min(3).max(30).required(),
  password_confirmation: Joi.string().valid(Joi.ref('password')).required(),
};

const accountSignInValidator = (params) => {
  const { email, password } = params;
  const schema = Joi.object({
    email: rules.email,
    password: rules.password,
  });

  return schema.validate({ email, password }, defaultOptions);
};

const validateAccountSignIn = (req, res, next) => {
  const { error } = accountSignInValidator(req.body);

  if (error) {
    const messages = getValidatorError(error, 'account.signin');
    return res.jsonBadRequest(null, null, { error: messages });
  }

  next();
};

const accountSignUpValidator = (params) => {
  const { nickname, email, password, password_confirmation } = params;
  const schema = Joi.object({
    nickname: rules.nickname,
    email: rules.email,
    password: rules.password,
    password_confirmation: rules.password_confirmation,
  });

  return schema.validate(
    { nickname, password, password_confirmation, email },
    defaultOptions
  );
};

const validateAccountSignUp = (req, res, next) => {
  const { error } = accountSignUpValidator(req.body);

  if (error) {
    const messages = getValidatorError(error, 'account.signup');
    return res.jsonBadRequest(null, null, { error: messages });
  }

  next();
};

const accountChangePasswordValidator = (params) => {
  const { password, password_confirmation } = params;
  const schema = Joi.object({
    password: rules.password,
    password_confirmation: rules.password_confirmation,
  });

  return schema.validate({ password, password_confirmation }, defaultOptions);
};

const validateAccountChangePassword = (req, res, next) => {
  const { error } = accountChangePasswordValidator(req.body);

  if (error) {
    const messages = getValidatorError(error, 'account.signup');
    return res.jsonBadRequest(null, null, { error: messages });
  }

  next();
};

module.exports = {
  validateAccountSignUp,
  accountSignUpValidator,

  validateAccountSignIn,
  accountSignInValidator,

  validateAccountChangePassword,
  accountChangePasswordValidator,
};
