import { Box, Button, Typography } from "@mui/material";
import { Flight, FlightDetails, FlightLeg, FlightLegOriginDestination } from "../models/Skyscanner";
import { getFullYear, getTime } from "../utils/Helper";
import { useNavigate } from "react-router-dom";
import { routes } from "../models/Routes";
import CardFlightDetails from "./CardFlightDetails";
interface CardFlightProps {
	flight: Flight;
}

const CardFlight: React.FC<CardFlightProps> = ({ flight }) => {
	const navigate = useNavigate();
	const goToDetails = (flight: Flight) => {
		let getFlightDetailsParams: any = flight.legs.map((leg) => {
			const date = new Date(leg.departure);
			const result = {
				id: leg.id,
				origin: leg.origin.alt_id,
				destination: leg.destination.alt_id,
				date: getFullYear(date),
			};
			return result;
		});

		getFlightDetailsParams = JSON.stringify(getFlightDetailsParams);
		const url = routes.flightDetails.url + "?params=" + getFlightDetailsParams;
		navigate(url);
	};

	return (
		<Box className="cardFlight">
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "20px",
				}}>
				{flight?.legs?.length >= 1 && flight?.legs.map((details) => <CardFlightDetails flightLeg={details} key={details.id} />)}
			</Box>

			<Box className="right">
				<Button variant="contained" color="success" onClick={() => goToDetails(flight)}>
					{flight.price.amount}€
				</Button>
			</Box>
		</Box>
	);
};

export default CardFlight;
