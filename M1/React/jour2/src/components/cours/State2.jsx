import { useState } from "react";

const State2 = () => {
	const [compteur, setCompteur] = useState({ id: 1, nb: 0 });

	const clickHandler = () => {
		setCompteur({ ...compteur, nb: compteur.nb + 1 });
	};
	return (
		<div className="container">
			<h2>useState avec object</h2>
			<button className="btn btn-outline-dark mb-3" onClick={clickHandler}>
				Augmenter le compteur
			</button>

			<p>id = {compteur.id}</p>
			<p>nb = {compteur.nb}</p>
		</div>
	);
};

export default State2;
