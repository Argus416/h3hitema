import { Box, Button, Container, Typography } from "@mui/material";
import Calendar from "../components/Calendar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Home = () => {
	const currentUser = useSelector((state) => state.user);
	const navigate = useNavigate();
	return (
		<Container sx={{ marginTop: 3 }}>
			{currentUser.isLoggedIn ? (
				<Calendar />
			) : (
				<Box>
					<Typography variant="h4" color="initial">
						Vous n'êtes pas connecté, veuillez créer un compte
					</Typography>

					<Button to="/login" variant="contained" sx={{ marginTop: 3 }} onClick={() => navigate("/login")}>
						Login
					</Button>
				</Box>
			)}
		</Container>
	);
};

export default Home;
