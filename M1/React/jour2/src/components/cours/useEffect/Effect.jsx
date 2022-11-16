import { useState, useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../classes/Api";
import Spinner from "../../Global/Spinner";

function fonctionReductrice(state, action) {
	switch (action.type) {
		case "GET_ARTICLES":
			state = [...action.data];
			return state;
			break;
		default:
			return state;
			break;
	}
}

const Effect = () => {
	const [data, dispatch] = useReducer(fonctionReductrice, []);
	// const [data, setData] = useState([]);

	useEffect(() => {
		const getPosts = async () => {
			const todos = await api.getPosts(10);
			dispatch({ type: "GET_ARTICLES", data: todos });
			// setData(todos);
		};

		getPosts();
	}, []);

	return (
		<div className="container">
			<h1 className="h3 mb-3">useEffect</h1>
			<ul className="list-group">
				{data?.length >= 1 ? (
					data.map((todo) => (
						<li className="list-group-item" key={todo.id}>
							<Link to={`/cours/5/${todo.id}`}>{todo.title}</Link>
						</li>
					))
				) : (
					<Spinner />
				)}
			</ul>
		</div>
	);
};

export default Effect;
