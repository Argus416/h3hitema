import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Global/Menu";

import Error404 from "./pages/Error404";
import { UserContextProvider } from "./contexts/userContext";
import Optimisation from "./pages/Optimisation";
import ExoMemoParent from "./pages/exo/exo-memo/ExoMemoParent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<UserContextProvider>
				<Menu />

				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/optimisation" element={<Optimisation />} />

					<Route path="/exomemo" element={<ExoMemoParent />} />

					<Route path="*" element={<Error404 />} />
				</Routes>
			</UserContextProvider>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
