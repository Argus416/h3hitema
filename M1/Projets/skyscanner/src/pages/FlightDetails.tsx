import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { FlightDetails as FlightDetailsInterface, FlightLeg, GetFlightDetailsParams } from "../models/Skyscanner";
import { useParams, useSearchParams } from "react-router-dom";
import Skyscanner from "../api/Skyscanner";
import { flightDetailsUrlQueryParams } from "../models/Routes";
import CardFlightDetails from "../components/CardFlightDetails";

const FlightDetails: React.FC = () => {
	const [flightDetails, setFlightDetails] = useState([] as FlightDetailsInterface[] | boolean);
	const [loader, setLoader] = useState(false);
	const [searchParams] = useSearchParams();

	let params = JSON.parse(searchParams.get(flightDetailsUrlQueryParams.params) ?? "");

	// const fetchFlights = (params) => {
	// 	return params.map(async (param: string) => {
	// 		const flight = await Skyscanner.getFlightDetails(param);

	// 		return flight;
	// 	});
	// };

	useEffect(() => {
		(async () => {
			setLoader(true);
			params = params.map((param) => {
				const { id } = param;
				param = JSON.stringify({ origin: param.origin, destination: param.destination, date: param.date });
				param = `itineraryId=${id}&legs=[${param}]`;
				return param;
			});

			const flights = [] as FlightDetailsInterface[];

			for await (let param of params) {
				param = param.replaceAll("%", "");
				const flight = (await Skyscanner.getFlightDetails(param)) as FlightDetailsInterface[] | boolean;
				flights.push(flight);
			}

			setFlightDetails(flights);
			if (flights.length && !flights.includes(undefined)) {
				setLoader(false);
			}

			console.log(flights);
		})();

		// Skyscanner.getFlightDetails(getFlightDetailsParams).then((details) => {
		// 	setFlightDetails(details as FlightDetailsInterface);
		// });
	}, [params.length]);
	return (
		<Container>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "20px",
				}}>
				<Typography variant="h4">Détail de vol</Typography>
				{Array.isArray(flightDetails) &&
					flightDetails.length > 0 &&
					!flightDetails.includes(undefined) &&
					flightDetails.map((detail) => {
						return (
							<Box
								key={detail?.legs[0].id}
								sx={{
									boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
									borderRadius: "8px",
									padding: "12px",
								}}>
								<CardFlightDetails flightLeg={detail?.legs[0]} />
							</Box>
						);
					})}
			</Box>

			{loader && (
				<Box>
					<h2>Loading...</h2>
				</Box>
			)}
		</Container>
	);
};

export default FlightDetails;
