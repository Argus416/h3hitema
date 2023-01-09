import { Box, Typography } from "@mui/material";
import { Flight as FlightIcon } from "@mui/icons-material";
import { Flight, FlightLeg, FlightLegOriginDestination } from "../models/Skyscanner";
import { getTime } from "../utils/Helper";
interface CardFlightProps {
	flight: Flight;
}

interface CardFlightDetails {
	flightLeg: FlightLeg;
}

const Details: React.FC<CardFlightDetails> = ({ flightLeg }) => {
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

			<Box className="right">
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
	return <Box className="cardFlight">{flight?.legs?.length >= 1 && flight?.legs.map((details) => <Details flightLeg={details} key={details.id} />)}</Box>;
};

export default CardFlight;
