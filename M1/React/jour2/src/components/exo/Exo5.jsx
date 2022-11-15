import { faker } from "@faker-js/faker";
import { useState } from "react";

const Exo5 = () => {
	const createStudents = Array(5)
		.fill(null)
		.map(() => {
			return {
				id: faker.datatype.uuid(),
				nom: faker.name.firstName(),
				actif: faker.helpers.arrayElement([true, false]),
			};
		});

	const [students, setStudents] = useState(createStudents);

	const emojiHandler = (actif) => {
		if (actif) return "🚀";
		return "👎";
	};

	return (
		<div className="container">
			<h1 className="h2 mb-3">Exo 5</h1>

			<ul>
				{students.map((student) => (
					<li key={student.id}>
						{student.nom} {emojiHandler(student.actif)}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Exo5;
