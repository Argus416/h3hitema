import { ReactComponent as Logo } from "../assets/logo.svg";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container">
				<a className="navbar-brand" href="#">
					<Logo />
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
