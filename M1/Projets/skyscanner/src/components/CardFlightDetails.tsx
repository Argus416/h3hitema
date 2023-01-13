import { Box, Typography } from "@mui/material";
import { Flight, FlightDetailsLeg, FlightLeg, FlightLegOriginDestination } from "../models/Skyscanner";
import { getTime, getFullYear } from "../utils/Helper";
import { FavoriteBorder as FavoriteBorderIcon, Favorite as FavoriteIcon } from "@mui/icons-material";
import FlightSeperator from "./ui/FlightSeperator";

interface CardFlightDetailsInterface {
	flightLeg: FlightLeg | FlightDetailsLeg;
	displayLike?: Boolean;
}

const CardFlightDetails: React.FC<CardFlightDetailsInterface> = ({ flightLeg, displayLike }) => {
	let departure: Date | string = flightLeg?.departure ? new Date(flightLeg?.departure) : "";
	let arrival: Date | string = flightLeg?.arrival ? new Date(flightLeg?.arrival) : "";

	console.log({ flightLeg });

	if (departure) {
		departure = getTime(departure);
	}

	if (arrival) {
		arrival = getTime(arrival);
	}

	const directOrStopover = (stops: FlightLegOriginDestination[]) => {
		let result = "";
		if (stops?.length) {
			switch (stops?.length) {
				case 0:
					result = "Direct";
					break;
				case 1:
					result = `${stops?.length} escale`;
					break;

				default:
					result = `${stops?.length} escales`;
					break;
			}
		}

		return result;
	};

	return (
		<Box className="cardFlightDetails">
			<Box className="left">
				<Typography variant="h6" fontWeight="200" fontSize="14px">
					{flightLeg?.origin.name}
				</Typography>

				<Typography className="operatedBy" variant="h6">
					{getFullYear(flightLeg?.arrival)}
				</Typography>
			</Box>

			<Box className="center">
				<Typography variant="h5">{departure}</Typography>
				<Box className="middle">
					<Typography variant="h6" fontSize="15px">
						{directOrStopover(flightLeg.stops)}
					</Typography>

					<FlightSeperator />

					{/* <Typography variant="h6" fontSize="15px">
						{flightLeg?.escalade === 0 ? "Direct" : `${flightLeg?.escalade} escalade`}
					</Typography> */}
				</Box>
				<Typography variant="h5">{arrival}</Typography>
			</Box>

			{displayLike && (
				<Box>
					<FavoriteBorderIcon />
					<FavoriteIcon sx={{ fill: "red !important" }} />
				</Box>
			)}
		</Box>
	);
};

export default CardFlightDetails;
