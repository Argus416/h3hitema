const redis = require('../db');

class Main {
	async findAllCommunes(req, res) {
		try {
			const communes = await redis.sMembers('communes');
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
}

module.exports = new Main();
