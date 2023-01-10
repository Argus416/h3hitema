import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App";
import Airports from "./pages/Airports";
import FlightDetails from "./pages/FlightDetails";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { routes } from "./models/Routes";
import Error404 from "./pages/Error";
import Favorite from "./pages/Favorite";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Router>
			<Navbar />
			<Routes>
				<Route path={routes.home.url} element={<App />} />
				<Route path={routes.airports.url} element={<Airports />} />

				<Route path={routes.favorite.url} element={<Favorite />} />
				<Route path={routes.flightDetails.url} element={<FlightDetails />} />

				<Route path={routes.errors["404"].url} element={<Error404 />} />
			</Routes>
		</Router>
	</React.StrictMode>
);
