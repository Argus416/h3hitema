import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Global/Menu";
import Event from "./components/cours/Event";
import Exo1 from "./components/exo/Exo1";
import Exo2 from "./components/exo/Exo2";
import Exo3 from "./components/exo/Exo3";
import Exo4 from "./components/exo/Exo4";
import Exo5 from "./components/exo/Exo5";

import State2 from "./components/cours/State2";
import Articles from "./components/cours/props/Articles";
import StateReduce from "./components/cours/StateReduce";
import Exo6 from "./components/exo/Exo6";
import Error404 from "./pages/Error404";
import Effect from "./components/cours/useEffect/Effect";
import EffectArticle from "./components/cours/useEffect/EffectArticle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Menu />

			<Routes>
				<Route path="/" exact element={<App />} />
				<Route exact path="/exo">
					<Route path="1" exact element={<Exo1 />} />
					<Route path="2" exact element={<Exo2 />} />
					<Route path="3" exact element={<Exo3 />} />
					<Route path="4" exact element={<Exo4 />} />
					<Route path="5" exact element={<Exo5 />} />
					<Route path="6" exact element={<Exo6 />} />
				</Route>

				<Route path="/cours">
					<Route path="1" exact element={<Event />} />
					<Route path="2" exact element={<State2 />} />
					<Route path="3" exact element={<Articles />} />
					<Route path="4" exact element={<StateReduce />} />
					<Route path="5" exact element={<Effect />}>
						<Route path=":id" exact element={<EffectArticle />} />
					</Route>
				</Route>

				<Route path="*" exact element={<Error404 />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
