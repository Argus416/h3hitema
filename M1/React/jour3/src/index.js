import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Global/Menu";
import Contact from "./pages/Contact";
import About from "./pages/About";

import Error404 from "./pages/Error404";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Menu />

			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/exo"></Route>
				<Route path="/cours"></Route>

				<Route path="/contact" element={<Contact />} />
				<Route path="/a-propos" element={<About />} />

				<Route path="*" element={<Error404 />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
