const Main = require('../services/Main');
const express = require('express');

const router = express.Router();

router.get('/', Main.find);

module.exports = router;
