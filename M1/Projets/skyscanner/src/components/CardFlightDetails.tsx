import { Box, Button, Typography } from "@mui/material";
import { Flight, FlightDetailsLeg, FlightLeg, FlightLegOriginDestination } from "../models/Skyscanner";
import { getTime, getFullYear } from "../utils/Helper";
import { FavoriteBorder as FavoriteBorderIcon, Favorite as FavoriteIcon } from "@mui/icons-material";
import FlightSeperator from "./ui/FlightSeperator";
import Skyscanner from "../api/Skyscanner";
interface CardFlightDetailsInterface {
	flightLeg: FlightLeg | FlightDetailsLeg;
	displayLike?: boolean;
	url?: string;
}

const CardFlightDetails: React.FC<CardFlightDetailsInterface> = ({ flightLeg, displayLike, url }) => {
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

	const addToFavorites = () => {
		Skyscanner.setFavoris(url);
	};

	const removeFromFavorite = () => {
		Skyscanner.removeFromFavorite(url);
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
					<Button onClick={addToFavorites}>
						<FavoriteBorderIcon />
					</Button>
					<Button onClick={removeFromFavorite}>
						<FavoriteIcon sx={{ fill: "red !important" }} />
					</Button>
				</Box>
			)}
		</Box>
	);
};

export default CardFlightDetails;
