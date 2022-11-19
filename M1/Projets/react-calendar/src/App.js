import "./style/style.scss";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Reservations from "./pages/Reservations";
import Login from "./pages/User/Login";
import Signup from "./pages/User/Signup";
import Error404 from "./pages/errors/Error404";

const theme = createTheme();

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/reservations" element={<Reservations />} />

					<Route path="/login" element={<Login />} />
					<Route path="/Signup" element={<Signup />} />

					<Route path="*" element={<Error404 />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
