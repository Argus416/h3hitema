const Main = require('../services/Main');
const express = require('express');

const router = express.Router();

router.get('/communes', Main.findAllCommunes);
router.get('/commune/station/:commune/:id', Main.findCommuneStation);
router.get('/commune/:commune', Main.findCommuneStations);

router.post('/commune/station/:commune/:id', Main.addCommuneStation);
router.patch('/commune/station/:commune/:id', Main.updateCommuneStation);
router.delete('/commune/station/:commune/:id', Main.deleteCommuneStation);

module.exports = router;
