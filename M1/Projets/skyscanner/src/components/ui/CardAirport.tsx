import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Airport } from "../../models/Skyscanner";

interface CardAirportProps {
	airport: Airport;
}


const CardAirport: React.FC<CardAirportProps> = ({ airport }) => {
	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
					{airport.CountryName}
				</Typography>
				<Typography variant="h5" component="div">
					{airport.PlaceName}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Voir plus</Button>
			</CardActions>
		</Card>
	);
};

export default CardAirport;
