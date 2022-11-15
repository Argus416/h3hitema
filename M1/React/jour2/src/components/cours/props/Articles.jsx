import { faker } from "@faker-js/faker";
import { useState } from "react";
import Article from "./Article";

const Articles = () => {
	const createArticles = Array(10)
		.fill(null)
		.map(() => {
			return {
				id: faker.datatype.uuid(),
				title: faker.name.jobTitle(),
				like: Math.floor(Math.random() * (100 - 0 + 1)),
			};
		});

	const [articles, setArticles] = useState(createArticles);

	const likeHandler = (data) => {
		setArticles(() => {
			return articles.map((article) => {
				if (data.id === article.id) article.like++;
				return article;
			});
		});
	};

	return (
		<div className="container">
			<h1>Articles</h1>
			{articles.map((article) => (
				<Article article={article} key={article.id} likeHandler={likeHandler} />
			))}
		</div>
	);
};

export default Articles;
