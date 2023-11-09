const _ = require('lodash');
const fs = require('fs');
const csvToObj = require('csv-to-js-parser').csvToObj;
const path = require('path');
const client = require('../db/index.js');

let data = fs
	.readFileSync(
		path.join(__dirname, '..', 'public', 'velib-disponibilite-en-temps-reel.csv')
	)
	.toString();

data = csvToObj(data, ';');

data = _.chain(data)
	.map((e) => {
		const keys = Object.entries(e).map((j) => {
			j[0] = _.snakeCase(j[0]);
			return j;
		});

		return _.fromPairs(keys);
	})
	.value();

const migrateData = async (data) => {
	const requests = [];
	data.forEach((e) => {
		const entries = Object.entries(e);

		const idModelOne =
			'vilib:' + e['nom_communes_equipees'] + ':' + e['identifiant_station'];
		entries.forEach((j) => {
			requests.push(client.hSet(idModelOne, j[0], j[1]));
		});

		const idModelTwo = 'communes';
		entries.forEach((j) => {
			requests.push(client.sAdd(idModelTwo, e['nom_communes_equipees']));
		});
	});

	Promise.all(requests).then((res) => {
		const result = new Set(res);
		console.log('All data inserted', result);
	});
};

module.exports = async () => {
	await migrateData(data);
};
