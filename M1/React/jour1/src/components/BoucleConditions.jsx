const BoucleConditions = () => {
	const etudiants = [
		{ id: 1, nom: "Alain", isStagaire: true },
		{ id: 2, nom: "Benoit", isStagaire: false },
		{ id: 3, nom: "Céline", isStagaire: true },
		{ id: 4, nom: "Damien", isStagaire: true },
	];

	return (
		<div>
			<ul>
				{etudiants.length >= 1 &&
					etudiants.map((etudiant) => {
						return <li key={etudiant.id}>{etudiant.nom}</li>;
					})}
			</ul>
		</div>
	);
};

export default BoucleConditions;
