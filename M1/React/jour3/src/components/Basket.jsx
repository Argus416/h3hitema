import { useContext } from "react";
import { BasketContext } from "../contexts/basketContext";

const Basket = () => {
	const { basket, removeFromBasket } = useContext(BasketContext);
	const removeFromBasketHandler = (product) => {
		removeFromBasket(product);
	};
	return (
		<div className="container">
			<h1 className="h2 mb-4">Pannier</h1>
			{basket?.length > 0 ? (
				basket?.map((product) => (
					<div key={product.idDrink} className="d-flex justify-content-between align-items-center mb-4">
						<div className="left d-flex gap-5">
							<img width="150" src={product.strDrinkThumb} alt={product.strDrink + " photo"} />
							<div>
								<h2>{product.strDrink}</h2>
								<p>{product.strInstructions}</p>
							</div>
						</div>
						<div className="ps-5 right">
							<button onClick={(e) => removeFromBasketHandler(product)} className="btn btn-danger">
								X
							</button>
						</div>
					</div>
				))
			) : (
				<h2 className="h4">Votre panier est vide</h2>
			)}
		</div>
	);
};

export default Basket;
