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
	const [cocktails, setCocktails] = useState({});

	useEffect(() => {
		const getCocktails = async () => {
			const data = await api.getCocktail("margarita");
			setCocktails(data);
		};

		getCocktails();
	}, []);

	return (
		<div className="App">
			<div className="container">
				<h1 className="h2 mb-3">Home </h1>
				<div className="row">
					{Object.keys(cocktails).length >= 1 && cocktails.drinks.map((cocktail) => <Card key={cocktail.idDrink} cocktail={cocktail} />)}
				</div>
			</div>
		</div>
	);
};

export default App;
