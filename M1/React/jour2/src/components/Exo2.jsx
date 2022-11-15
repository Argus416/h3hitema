const Exo2 = () => {
	const articles = [
		{ id: 1, titre: "article 1", publie: true },
		{ id: 2, titre: "article 2", publie: false },
		{ id: 3, titre: "article 3", publie: false },
		{ id: 4, titre: "article 4", publie: true },
	];

	const mouseOverHanlder = (article) => {
		console.log(article.titre);
	};
	return (
		<div className="container">
			<h1 className="h2 mb-3">Exo 1</h1>
			<ul>
				{articles.map((article) => {
					return (
						!article.publie && (
							<li onMouseOver={() => mouseOverHanlder(article)} key={article.id}>
								{article.titre}
							</li>
						)
					);
				})}
			</ul>
		</div>
	);
};

export default Exo2;
