const createClient = require('redis').createClient;

const client = createClient({
	url: 'redis://redis-m2:6379',
});

client.on('error', (err) => console.log('Redis Client Error', err));
client.on('connect', () => console.log('Redis Client Connected'));

module.exports = client;
