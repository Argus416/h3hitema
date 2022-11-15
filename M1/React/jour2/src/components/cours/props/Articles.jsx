import { faker } from "@faker-js/faker";
import Article from "./Article";

const Articles = () => {
	const articles = Array(10)
		.fill(null)
		.map(() => {
			return {
				id: faker.datatype.uuid(),
				title: faker.name.jobTitle(),
				like: Math.floor(Math.random() * (100 - 0 + 1)),
			};
		});

	console.log("====================================");
	console.log(articles);
	console.log("====================================");

	return (
		<div className="container">
			<h1>Articles</h1>
			{articles.map((article) => (
				<Article article={article} key={article.id} />
			))}
		</div>
	);
};

export default Articles;
