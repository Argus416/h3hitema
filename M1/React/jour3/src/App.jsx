import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.scss";
import { useEffect, useState } from "react";
import { api } from "./classes/Api";

const Card = ({ cocktail }) => {
	return (
		<div className="col-3 mb-3">
			<div className="card">
				<img className="card-img-top" src={cocktail.strDrinkThumb} alt={cocktail.strDrink + " photo"} />
				<div className="card-body">
					<h5 className="card-title">{cocktail.strDrink}</h5>
					<p className="card-text">{cocktail?.strInstructions?.slice(0, 40)} </p>
				</div>
			</div>
		</div>
	);
};

const App = () => {
	const [cocktails, setCocktails] = useState([]);
	const [searchCocktail, setSearchCocktail] = useState(" ");

	useEffect(() => {
		const getCocktails = async () => {
			const { drinks } = await api.getCocktail(searchCocktail);
			setCocktails(drinks);
		};

		getCocktails();
	}, [searchCocktail]);

	const searchHandler = (e) => {
		const { value } = e.target;
		if (value.trim().length) {
			setSearchCocktail(value.trim());
		}
	};

	return (
		<div className="App">
			<div className="container">
				<section>
					<div className="d-flex justify-content-between align-items-center mb-3">
						<h1 className="h2 ">Home</h1>
						<div className="input-group w-25">
							<input
								type="text"
								className="form-control"
								onChange={(e) => {
									searchHandler(e);
								}}
								placeholder="Rechecher un cocktail"
								aria-label="Rechecher un cocktail"
								aria-describedby="addon-wrapping"
							/>
						</div>
					</div>
					<div className="row">{cocktails?.length >= 1 && cocktails.map((cocktail) => <Card key={cocktail.idDrink} cocktail={cocktail} />)}</div>
				</section>
				{!(searchCocktail?.length && cocktails?.length) && <h1 className="h2 ">Aucun cocktail n'a été trouvé</h1>}
			</div>
		</div>
	);
};

export default App;
