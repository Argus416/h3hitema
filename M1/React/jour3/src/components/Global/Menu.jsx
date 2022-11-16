import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { UserContext } from "../../contexts/userContext";
import { useContext } from "react";

const Menu = () => {
	const navigate = useNavigate();
	const { isLogged, logout } = useContext(UserContext);

	const activeLink = (isActive) => {
		const commonClasses = "nav-link";
		return isActive ? `${commonClasses} active` : `${commonClasses}`;
	};

	const logOutHandler = () => {
		logout();
		navigate("/");
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
			<div className="container">
				<NavLink to="/" className="navbar-brand">
					<img src={logo} alt="logo" />
				</NavLink>
				<button className="navbar-toggler" type="button">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink to="/" className={({ isActive }) => activeLink(isActive)}>
								Home
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink to="/contact" className={({ isActive }) => activeLink(isActive)}>
								Contact
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink to="/a-propos" className={({ isActive }) => activeLink(isActive)}>
								A propos
							</NavLink>
						</li>
						{!isLogged ? (
							<>
								<li className="nav-item">
									<NavLink to="/login" className={({ isActive }) => activeLink(isActive)}>
										Connexion
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink to="/signup" className={({ isActive }) => activeLink(isActive)}>
										Créer un compte
									</NavLink>
								</li>
							</>
						) : (
							<>
								<li className="nav-item">
									<NavLink to="/basket" className={({ isActive }) => activeLink(isActive)}>
										Pannier
									</NavLink>
								</li>
								<li className="nav-item">
									<button className="btn btn-danger" onClick={logOutHandler}>
										Déconnexion
									</button>
								</li>
							</>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Menu;
