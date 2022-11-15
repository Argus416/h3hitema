import { useState } from "react";

const Exo3 = () => {
	const [nbClick, setNbClick] = useState(0);
	const incHanlder = () => {
		setNbClick(nbClick + 1);
	};

	const dimHanlder = () => {
		setNbClick(nbClick - 1);
	};
	return (
		<div className="container">
			<h1 className="h2 mb-3">Click event</h1>
			<div className="d-flex justify-content-between align-items-center">
				<div>
					<button className="btn btn-success me-2" onClick={incHanlder}>
						Inc
					</button>
					<button className="btn btn-danger" onClick={dimHanlder}>
						Dim
					</button>
				</div>

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

export default Exo3;
