import { Box, Button, Typography } from "@mui/material";
import { Flight as FlightIcon } from "@mui/icons-material";
import { Flight, FlightDetails, FlightLeg, FlightLegOriginDestination } from "../models/Skyscanner";
import { getFullYear, getTime } from "../utils/Helper";
import { useNavigate } from "react-router-dom";
import { routes } from "../models/Routes";
interface CardFlightProps {
	flight: Flight;
}

interface CardFlightDetails {
	flightLeg: FlightLeg;
	flight: Flight;
}

const Details: React.FC<CardFlightDetails> = ({ flightLeg, flight }) => {
	let departure: Date | string = flightLeg?.departure ? new Date(flightLeg?.departure) : "";
	let arrival: Date | string = flightLeg?.arrival ? new Date(flightLeg?.arrival) : "";

	if (departure) {
		departure = getTime(departure);
	}

	if (arrival) {
		arrival = getTime(arrival);
	}

	const directOrStopover = (stops: FlightLegOriginDestination[]) => {
		let result = "";
		switch (stops.length) {
			case 0:
				result = "Direct";
				break;
			case 1:
				result = `${stops.length} escale`;
				break;

			default:
				result = `${stops.length} escales`;
				break;
		}
		return result;
	};

	return (
		<Box className="details">
			<Box className="left">
				<Typography variant="h6" fontWeight="200" fontSize="14px">
					{flightLeg?.origin.name}
				</Typography>

				<Typography className="operatedBy" variant="h6">
					{flightLeg?.origin.name}
				</Typography>
			</Box>

			<Box className="center">
				<Typography variant="h5">{departure}</Typography>
				<Box className="middle">
					<Typography variant="h6" fontSize="15px">
						{directOrStopover(flightLeg.stops)}
					</Typography>
					<Box className="flightSeperator">
						<span className="line"></span>
						<FlightIcon className="flightIcon" />
					</Box>
					{/* <Typography variant="h6" fontSize="15px">
						{flightLeg?.escalade === 0 ? "Direct" : `${flightLeg?.escalade} escalade`}
					</Typography> */}
				</Box>
				<Typography variant="h5">{arrival}</Typography>
			</Box>
		</Box>
	);
};

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
			<Box>{flight?.legs?.length >= 1 && flight?.legs.map((details) => <Details flight={flight} flightLeg={details} key={details.id} />)}</Box>

			<Box className="right">
				<Button variant="contained" color="success" onClick={() => goToDetails(flight)}>
					{flight.price.amount}€
				</Button>
			</Box>
		</Box>
	);
};

export default CardFlight;
