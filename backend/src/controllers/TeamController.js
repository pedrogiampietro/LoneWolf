const express = require('express');

const { Teams } = require('../models');
const { getMessage } = require('../helpers/messages');
const { checkJwt } = require('../middlewares/jwt');

const { uploadGuildLogo } = require('../middlewares/multer');

const router = express.Router();

router.post('/', checkJwt, async (req, res) => {});

router.get('/', async (req, res) => {});

module.exports = router;
