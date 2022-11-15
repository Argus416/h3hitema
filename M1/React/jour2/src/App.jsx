import { Link } from "react-router-dom";
import "./style/App.scss";

const App = () => {
	const linksExo = [
		{ id: 1, link: "/exo/1", title: "Exo 1" },
		{ id: 2, link: "/exo/2", title: "Exo 2" },
	];

	const linksCourse = [{ id: 1, link: "/cours/1", title: "Event" }];
	return (
		<div className="App">
			<div className="container">
				<div className="row">
					<div className="col-6">
						<h2>Cours</h2>
						<ul className="list-group">
							{linksCourse.map((link) => (
								<li key={link.id} className="list-group-item">
									<Link to={link.link} className="App-link">
										{link.title}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div className="col-6">
						<h2>Exo</h2>
						<ul className="list-group">
							{linksExo.map((link) => (
								<li key={link.id} className="list-group-item">
									<Link to={link.link} className="App-link">
										{link.title}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
