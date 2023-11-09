const express = require('express');
const app = express();
const { PORT } = require('./config');
const router = require('./router');
const redis = require('./db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1', router);

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);

	redis.connect();
});
