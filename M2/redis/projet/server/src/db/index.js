const { REDIS_URL } = require('../config');
const createClient = require('redis').createClient;

const client = createClient({
	url: REDIS_URL,
});

client.on('error', (err) => console.log('Redis Client Error', err));
client.on('connect', () => console.log('Redis Client Connected'));

module.exports = client;
