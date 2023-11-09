const express = require('express');
const app = express();
const { PORT } = require('./config');
const router = require('./router/v1');
const redis = require('./db');
const csvToRedis = require('./migration/csvToRedis');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());

app.use('/v1', router);

csvToRedis();

app.listen(PORT, '0.0.0.0', () => {
	console.log(`Server listening on http://0.0.0.0:${PORT} 🎉`);
	// console.log(listEndpoints(app));
});
