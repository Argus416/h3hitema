import { useState } from "react";

const Event = () => {
	const [nbClick, setNbClick] = useState(0);
	const cliqueHandler = () => {
		setNbClick(nbClick + 1);
	};
	return (
		<div className="container">
			<h1 className="h2 mb-3">Click event</h1>
			<div className="d-flex justify-content-between align-items-center">
				<button className="btn btn-danger" onClick={cliqueHandler}>
					Cliquer
				</button>
				<span>
					Nombre de clique
					<em>
						<b> {nbClick}</b>
					</em>
				</span>
			</div>
		</div>
	);
};

export default Event;
