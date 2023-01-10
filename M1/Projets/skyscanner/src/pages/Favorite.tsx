import { Box, Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
import FlightSeperator from "../components/ui/FlightSeperator";

const FavoriteCard: React.FC = () => {
	return (
		<Box
			sx={{
				boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
				borderRadius: "8px",
				padding: "12px",
				maxWidth: "300px",
			}}>
			<Box>
				<Typography>Card</Typography>
				<Box sx={{ display: "flex", justifyContent: "center" }}>
					<FlightSeperator />
				</Box>
				<Typography sx={{ textAlign: "end" }}>Card</Typography>
			</Box>
		</Box>
	);
};

const Favorite: React.FC = () => {
	const [loader, setLoader] = useState(false);
	const [favorites, setFavorites] = useState([]);

	return (
		<Container>
			<Typography variant="h4">Favorite </Typography>
			<Box sx={{ paddingTop: "15px" }}>
				<FavoriteCard />
			</Box>
		</Container>
	);
};

export default Favorite;
