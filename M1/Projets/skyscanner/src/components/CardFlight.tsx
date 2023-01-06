import { Box, Typography } from "@mui/material";
import { Flight as FlightIcon } from "@mui/icons-material";
import { Flight } from "../models/Skyscanner";
interface CardFlightProps {
	flight?: any;
}

const Details: React.FC<CardFlightProps> = ({ flight }) => {
	return (
		<Box className="details">
			<Box className="left">
				<Typography variant="h6" fontWeight="200" fontSize="14px">
					{flight.airport}
				</Typography>

				<Typography className="operatedBy" variant="h6">
					{flight.operatedBy}
				</Typography>
			</Box>

			<Box className="right">
				<Typography variant="h5">{flight.departure}</Typography>
				<Box className="middle">
					<Typography variant="h6" fontSize="15px">
						{flight.duration}
					</Typography>
					<Box className="flightSeperator">
						<span className="line"></span>
						<FlightIcon className="flightIcon" />
					</Box>
					<Typography variant="h6" fontSize="15px">
						{flight.escalade === 0 ? "Direct" : `${flight.escalade} escalade`}
					</Typography>
				</Box>
				<Typography variant="h5">{flight.arrival}</Typography>
			</Box>
		</Box>
	);
};

const CardFlight: React.FC<CardFlightProps> = ({ flight }) => {
	const flightExemple = [
		{
			airport: "Ryanair",
			origin: "Paris",
			destination: "Lyon",
			img: "https://logo.clearbit.com/ryanair.com",
			departure: "20:05",
			codeDeparture: "MRS",
			arrival: "22:30",
			codeArrival: "BVA",
			operatedBy: "Opéré par Malta Air",
			duration: "1:30",
			escalade: 0,
		},

		{
			airport: "Ryanair",
			origin: "Lyon",
			destination: "Paris",
			img: "https://logo.clearbit.com/ryanair.com",
			arrival: "09:25",
			codeDeparture: "BVA",
			departure: "11:50",
			codeArrival: "MRS",
			operatedBy: "Opéré par Malta Air",
			duration: "1:30",
			escalade: 0,
		},
	];
	return <Box className="cardFlight">{flightExemple.length >= 1 && flightExemple.map((flight) => <Details flight={flight} />)}</Box>;
};

export default CardFlight;
