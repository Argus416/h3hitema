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
