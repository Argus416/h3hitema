import { useState, useMemo } from "react";
import { faker } from "@faker-js/faker";

const Optimisation = () => {
	const [login, setLogin] = useState(false);
	const loadSelectElements = () => {
		const options = Array(5)
			.fill(null)
			.map(() => {
				return {
					id: faker.datatype.uuid(),
					value: faker.name.fullName(),
				};
			});

		return options.map((x) => {
			return <option key={x.id}>{x.value}</option>;
		});
	};

	const loadSelectElementsMemo = useMemo(() => {
		return loadSelectElements();
	}, []);

	return (
		<div className="container">
			<h1>Optimisation</h1>
			<div className="d-flex gap-3 mt-2">
				<button className="btn btn-primary" onClick={() => setLogin(!login)}>
					{login ? "Connextion" : "Déconnextion"}
				</button>
				<select className="form-select">{loadSelectElementsMemo}</select>
			</div>
		</div>
	);
};

export default Optimisation;
