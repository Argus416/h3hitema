import { useState, useEffect, createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
	const profilData = { login: "aze", password: "aze", isLogged: false };
	const [profil, setProfil] = useState(profilData);

	useEffect(() => {
		const isLoggedin = localStorage.getItem("logged");
		if (isLoggedin) {
			setProfil({ ...profil, isLogged: true });
		}
	}, []);

	const connexion = ({ login, password }) => {
		if (profil.login === login && profil.password === password) {
			setProfil({ ...profil, isLogged: true });
			localStorage.setItem("logged", "true");
			return true;
		} else {
			console.error("User or Password not correct");
			return false;
		}
	};

	const logout = () => {
		if (profil.login) {
			localStorage.removeItem("logged", "true");
			setProfil({ ...profil, isLogged: false });
		}
	};
	return <UserContext.Provider value={{ ...profil, connexion, logout }}>{props.children}</UserContext.Provider>;
};
