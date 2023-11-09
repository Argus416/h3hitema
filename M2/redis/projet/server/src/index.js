const express = require('express');
const app = express();
const { PORT } = require('./config');
const router = require('./router');
const redis = require('./db');
const csvToRedis = require('./migration/csvToRedis');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/v1', router);

csvToRedis();

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
});
