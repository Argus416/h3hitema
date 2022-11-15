const Article = ({ article, likeHandler }) => {
	return (
		<div className="d-flex justify-content-between align-items-center mb-3">
			<h5>{article.title}</h5>
			<div className="w-25 text-end">
				<button className="btn btn-outline-success me-3" onClick={() => likeHandler(article)}>
					👍
				</button>
				<span>{article.like} likes</span>
			</div>
		</div>
	);
};

export default Article;
