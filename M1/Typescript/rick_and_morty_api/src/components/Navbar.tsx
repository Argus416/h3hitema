import { ReactComponent as Logo } from "../assets/logo.svg";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container">
				<a className="navbar-brand" href="#">
					<Logo />
				</a>

				<div className="collapse navbar-collapse my-nav" id="navbarSupportedContent">
					<ul className="my-navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="my-nav-link" aria-current="page" href="https://rickandmortyapi.com/documentation">
								Docs
							</a>
						</li>
						<li className="nav-item">
							<a className="my-nav-link my-secondary-btn" href="https://rickandmortyapi.com/support-us">
								Support them
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
