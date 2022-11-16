const Signup = () => {
	return (
		<div className="container">
			<main className="form-signin w-50 mt-5 m-auto">
				<form>
					<h1 className="h3 mb-4 fw-normal">Signup</h1>

					<div className="mb-3">
						<label for="email">Email</label>
						<input type="email" className="form-control" id="email" placeholder="name@example.com" />
					</div>

					<div className="mb-3">
						<label for="password">Mots de passe</label>
						<input type="password" className="form-control" id="password" placeholder="Password" />
					</div>

					<button className="w-100 btn btn-lg btn-primary" type="submit">
						Créer un nonuveau compte
					</button>
				</form>
			</main>
		</div>
	);
};

export default Signup;
