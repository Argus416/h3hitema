import { faker } from "@faker-js/faker";
import { useState } from "react";

const createStudents = () => {
	return Array(10)
		.fill(null)
		.map(() => {
			return {
				id: faker.datatype.uuid(),
				nom: faker.name.firstName(),
				actif: faker.helpers.arrayElement([true, false]),
			};
		});
};

const Exo5 = () => {
	const [students, setStudents] = useState(createStudents());

	const emojiHandler = (actif) => {
		if (actif) return "🚀";
		return "👎";
	};

	const clickHandler = () => {
		setStudents(createStudents());
	};

	return (
		<div className="container">
			<h1 className="h2 mb-3">Exo 5</h1>
			<div className="d-flex justify-content-between align-items-start">
				<ul>
					{students.map((student) => (
						<li key={student.id}>
							{student.nom} {emojiHandler(student.actif)}
						</li>
					))}
				</ul>

				<button className="btn btn-primary" onClick={clickHandler}>
					Regenerate
				</button>
			</div>
		</div>
	);
};

export default Exo5;
