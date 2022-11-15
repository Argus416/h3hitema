import { Link } from "react-router-dom";
import "./style/App.scss";

const App = () => {
	const links = [
		{ id: 1, link: "/1", title: "Exo 1" },
		{ id: 2, link: "/2", title: "Exo 2" },
		{ id: 3, link: "/3", title: "Event" },
	];
	return (
		<div className="App">
			<div className="container">
				<ul className="list-group">
					{links.map((link) => (
						<li key={link.id} className="list-group-item">
							<Link to={link.link} className="App-link">
								{link.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default App;
