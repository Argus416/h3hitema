import { useState } from "react";

const Exo4 = () => {
	const [user, setUser] = useState({
		id: 1,
		nom: "Alain",
		isLogged: false,
	});

	const [text, setText] = useState("Veuillez vous connecter");

	const loginHandler = () => {
		setUser({ ...user, isLogged: true });
		setText(`Bienvenu ${user.nom}`);
	};

	const logoutHandler = () => {
		setUser({ ...user, isLogged: false });
		setText("Veuillez vous connecter");
	};

	return (
		<div className="container">
			<h1 className="h2 mb-3">Login/Logout</h1>
			<div className="d-flex justify-content-between align-items-center">
				<div>
					{user.isLogged ? (
						<button className="btn btn-danger" onClick={logoutHandler}>
							Logout
						</button>
					) : (
						<button className="btn btn-success me-2" onClick={loginHandler}>
							Login
						</button>
					)}
				</div>

				<p>{text}</p>
			</div>
		</div>
	);
};

export default Exo4;
