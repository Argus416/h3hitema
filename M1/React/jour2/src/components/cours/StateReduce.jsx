import { useReducer } from "react";

function fonctionReductrice(state, action) {
	switch (action) {
		case "AUGMENTER":
			return state + 1;
			break;
		case "DIMINUER":
			return state - 1;
			break;

		case "ZERO":
			return (state = 0);
			break;
		default:
			return state;
			break;
	}
}

const StateReduce = () => {
	const [value, dispatch] = useReducer(fonctionReductrice, 0);

	return (
		<div className="container">
			<h1 className="h2 mb-3">State Reduce</h1>
			<p>mon valeur {value}</p>
			<div className="d-flex">
				<button className="btn btn-success" onClick={() => dispatch("AUGMENTER")}>
					+
				</button>
				<button className="btn btn-warning mx-3" onClick={() => dispatch("DIMINUER")}>
					-
				</button>
				<button className="btn btn-danger" onClick={() => dispatch("ZERO")}>
					0
				</button>
			</div>
		</div>
	);
};

export default StateReduce;
