import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
const Menu = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
			<div className="container">
				<Link to="/" className="navbar-brand">
					<img src={logo} alt="logo" />
				</Link>
				<button className="navbar-toggler" type="button">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link to="/" className="nav-link active">
								Home
							</Link>
						</li>

						<li className="nav-item">
							<Link to="/contact" className="nav-link active">
								Contact
							</Link>
						</li>

						<li className="nav-item">
							<Link to="/a-propos" className="nav-link active">
								A propos
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Menu;
