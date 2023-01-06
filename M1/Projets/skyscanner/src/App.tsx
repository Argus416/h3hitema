import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Home from "./pages/Home";
import "./style/App.scss";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="App ">
			<Navbar />
			<div>
				<Home />
			</div>
		</div>
	);
}

export default App;
