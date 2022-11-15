import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./style/App.scss";

const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<Link to="/1" className="App-link">
					Page one
				</Link>
				<Link to="/2" className="App-link">
					Page two
				</Link>
			</header>
		</div>
	);
};

export default App;
