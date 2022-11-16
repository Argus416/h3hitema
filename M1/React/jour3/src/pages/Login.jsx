import { useRef } from "react";
import { UserContext } from "../contexts/userContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const login = useRef();
	const password = useRef();
	const navigate = useNavigate();
	const { connexion } = useContext(UserContext);

	const submitHandler = (e) => {
		e.preventDefault();
		// const formData = new FormData(e.target);
		// const data = Object.fromEntries(formData.entries());

		const data = {
			login: login.current.value,
			password: password.current.value,
		};

		const loginFun = connexion(data);

		if (loginFun) {
			navigate("/");
		}
	};
	return (
		<div className="container">
			<main className="form-signin w-50 mt-5 m-auto">
				<form onSubmit={submitHandler}>
					<h1 className="h3 mb-4 fw-normal">Connexion</h1>

					<div className="mb-3">
						<label htmlFor="email">Email</label>
						<input ref={login} className="form-control" name="login" id="email" placeholder="name@example.com" />
					</div>

					<div className="mb-3">
						<label htmlFor="password">Mots de passe</label>
						<input ref={password} type="password" name="password" className="form-control" id="password" placeholder="Password" />
					</div>

					<button className="w-100 btn btn-lg btn-primary" type="submit">
						Me connecter
					</button>
				</form>
			</main>
		</div>
	);
};

export default Login;
