import { Container, Typography, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

const Reservations = () => {
	const currentUser = useSelector((state) => state.user);
	const clickHandler = () => {
		console.log(currentUser);
	};
	return (
		<Container sx={{ marginTop: 3 }}>
			<Typography variant="h3" color="initial">
				Reservations
			</Typography>

			<Button onClick={clickHandler}>toto</Button>
		</Container>
	);
};

export default Reservations;
