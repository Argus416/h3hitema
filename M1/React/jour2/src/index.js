import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Event from "./components/cours/Event";
import Exo1 from "./components/exo/Exo1";
import Exo2 from "./components/exo/Exo2";
import Exo3 from "./components/exo/Exo3";
import Exo4 from "./components/exo/Exo4";
import Exo5 from "./components/exo/Exo5";

import State2 from "./components/cours/State2";
import Articles from "./components/cours/props/Articles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode>
	<BrowserRouter>
		<Menu />

		<Routes>
			<Route path="/" element={<App />} />

			<Route path="/exo/1" element={<Exo1 />} />
			<Route path="/exo/2" element={<Exo2 />} />
			<Route path="/exo/3" element={<Exo3 />} />
			<Route path="/exo/4" element={<Exo4 />} />
			<Route path="/exo/5" element={<Exo5 />} />

			<Route path="/cours/1" element={<Event />} />
			<Route path="/cours/2" element={<State2 />} />
			<Route path="/cours/3" element={<Articles />} />
		</Routes>
	</BrowserRouter>
	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
