import { useParams } from "react-router-dom";

const EffectArticle = () => {
	const params = useParams();
	return (
		<div className="container">
			<h1>Article content</h1>
		</div>
	);
};

export default EffectArticle;
