import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App";
import Airports from "./pages/Airports";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { routes } from "./models/Routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Router>
			<Navbar />
			<Routes>
				<Route path={routes.home.url} element={<App />} />
				<Route path={routes.airports.url} element={<Airports />} />
			</Routes>
		</Router>
	</React.StrictMode>
);
