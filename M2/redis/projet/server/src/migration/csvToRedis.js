const fs = require('fs');
const csvToObj = require('csv-to-js-parser').csvToObj;
const path = require('path');

const client = require('../db/index.js');
const data = fs
	.readFileSync(
		path.join(__dirname, '..', 'public', 'velib-disponibilite-en-temps-reel.csv')
	)
	.toString();

let obj = csvToObj(data, ';');

module.exports = () => {
	console.log({ obj });
};
