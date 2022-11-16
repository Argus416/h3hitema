import { createContext, useEffect, useState } from "react";

export const BasketContext = createContext();

export const BasketContextProvider = (props) => {
	const [basket, setBasket] = useState([]);

	useEffect(() => {
		let oldBasket = localStorage.getItem("basket");
		if (oldBasket) {
			oldBasket = JSON.parse(oldBasket);
			setBasket(oldBasket);
		}
	}, []);

	const addToBasket = (product) => {
		const isProductInBasket = basket.indexOf(product);
		if (isProductInBasket === -1) {
			const addNewItem = [...basket, product];
			setBasket(addNewItem);
			localStorage.setItem("basket", JSON.stringify(addNewItem));
			return true;
		} else {
			console.error("Product already in basket");
			return false;
		}
	};

	const removeFromBasket = (product) => {
		let cloneBasket = [...basket];
		cloneBasket = cloneBasket.filter((x) => {
			if (product.idDrink !== x.idDrink) {
				return x;
			}
		});

		setBasket(cloneBasket);
		localStorage.setItem("basket", JSON.stringify(cloneBasket));
	};

	return <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>{props.children}</BasketContext.Provider>;
};
