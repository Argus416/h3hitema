import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../classes/Api";
import Spinner from "../../Global/Spinner";

const EffectArticle = () => {
	const params = useParams();
	const [article, setArticle] = useState({});

	useEffect(() => {
		api.getPost(params.articleId).then((data) => setArticle(data));
	}, []);

	return (
		<div className="container">
			{Object.keys(article).length > 1 ? (
				<>
					<h1 className="h2 mb-3 text-capitalize">{article.title}</h1>
					<p>{article.body}</p>
				</>
			) : (
				<Spinner />
			)}
		</div>
	);
};

export default EffectArticle;
