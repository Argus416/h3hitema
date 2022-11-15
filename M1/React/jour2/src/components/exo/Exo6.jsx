import { faker } from "@faker-js/faker";
import { useReducer } from "react";

function fonctionReductrice(state, action) {
	switch (action.type) {
		case "addNote":
			state = state.map((student) => {
				if (student.id === action.id) student.note = student.note + 2;
				return student;
			});
			return state;
			break;
		case "reduceNote":
			state = state.map((student) => {
				if (student.id === action.id) student.note = student.note - 2;
				return student;
			});
			return state;

			break;
		case "changeStudentName":
			state = state.map((student) => {
				if (student.id === action.id) student.name = faker.name.firstName();
				return student;
			});
			return state;

			break;

		default:
			return state;
			break;
	}
}

const Exo6 = () => {
	const createStudents = () => {
		return Array(5)
			.fill(null)
			.map(() => {
				return {
					id: faker.datatype.uuid(),
					name: faker.name.firstName(),
					note: Math.floor(Math.random() * (100 - 0 + 1)),
				};
			});
	};

	const [students, dispatch] = useReducer(fonctionReductrice, createStudents());

	return (
		<div className="container">
			<h1 className="h2 mb-3">Exo 6</h1>
			<ul>
				{students.map((student) => (
					<div className="d-flex justify-content-between align-items-center mb-3" key={student.id}>
						<li>
							{student.name} {student.note}
						</li>
						<div>
							<button className="btn btn-primary" onClick={() => dispatch({ type: "addNote", id: student.id })}>
								+
							</button>
							<button className="btn btn-warning mx-3" onClick={() => dispatch({ type: "reduceNote", id: student.id })}>
								-
							</button>
							<button className="btn btn-danger" onClick={() => dispatch({ type: "changeStudentName", id: student.id })}>
								change name
							</button>
						</div>
					</div>
				))}
			</ul>
		</div>
	);
};

export default Exo6;
