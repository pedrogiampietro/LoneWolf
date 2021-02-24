const express = require('express');

const { Teams, Team_Members } = require('../models');
const { getMessage } = require('../helpers/messages');
const { checkJwt } = require('../middlewares/jwt');

const { uploadTeamLogo } = require('../middlewares/multer');

const router = express.Router();

router.post(
  '/create',
  checkJwt,
  uploadTeamLogo.single('logo'),
  async (req, res) => {
    try {
      const { account_id, body, file } = req;
      const { name, description } = body;
      const finalFileName = file;

      const alreadyHaveTeam = await Team_Members.findAll({
        where: { account_id: account_id },
      });

      if (alreadyHaveTeam)
        return res.jsonBadRequest(null, 'Esse usuário já pertence a um Time.');

      const alreadyOwnerTeam = await Teams.findAll({
        where: { owner_id: account_id },
      });

      if (alreadyOwnerTeam)
        return res.jsonBadRequest(null, 'Esse usuário já pertence a um Time.');

      const isTeamExists = await Teams.findAll({
        where: { name },
      });
      if (isTeamExists)
        return res.jsonBadRequest(
          null,
          'Esse nome já está sendo utilizado, favor escolher outro.'
        );

      const createTeam = await Teams.create({
        name,
        description,
        logo: `uploads/teams/logo/${finalFileName.filename}`,
        owner_id: account_id,
      });
      return res.jsonOK(createTeam);
    } catch (error) {
      console.log(error);
    }
  }
);

module.exports = router;
