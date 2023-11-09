const Main = require('../services/Main');
const express = require('express');

const router = express.Router();

router.get('/communes', Main.findAllCommunes);
router.get('/commune/station/:commune/:id', Main.findCommuneStation);
router.get('/commune/:commune', Main.findCommuneStations);

module.exports = router;
