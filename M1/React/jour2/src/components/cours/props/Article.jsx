const Article = ({ article }) => {
	return (
		<div className="d-flex justify-content-between align-items-center mb-3">
			<h5>{article.title}</h5>
			<span>{article.like} likes</span>
		</div>
	);
};

export default Article;
