const redis = require('../db');
const _ = require('lodash');

class Main {
	async findAllCommunes(req, res) {
		try {
			let communes = await redis.sMembers('communes');
			communes = _.orderBy(communes);
			res.json(communes);
		} catch (err) {
			console.log(err);
		}
	}

	async findCommuneStations(req, res) {
		try {
			const { commune } = req.params;
			let stations = await redis.keys('vilib:' + commune + ':*');
			const requests = [];

			stations.forEach((station) => {
				requests.push(redis.hGetAll(station));
			});

			Promise.all(requests).then((r) => {
				res.json(r);
			});
		} catch (err) {
			console.log(err);
		}
	}

	async findCommuneStation(req, res) {
		try {
			const { commune, id } = req.params;
			const result = await redis.hGetAll('vilib:' + commune + ':' + id);
			res.json(result);
		} catch (err) {
			console.log(err);
		}
	}

	async updateCommuneStation(req, res) {
		const { commune, id } = req.params;
		const updateQuery = redis.hSet('vilib:' + commune + ':' + id, req.body);
		res.json(updateQuery);
	}

	async deleteCommuneStation(req, res) {
		const { commune, id } = req.params;
		console.log('delete', 'vilib:' + commune + ':' + id);
		const updateQuery = redis.del('vilib:' + commune + ':' + id, req.body);
		res.json(updateQuery);
	}
}

module.exports = new Main();
