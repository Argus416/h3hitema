import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { FlightDetails as FlightDetailsInterface, FlightLeg, GetFlightDetailsParams } from "../models/Skyscanner";
import { useParams, useSearchParams } from "react-router-dom";
import Skyscanner from "../api/Skyscanner";
import { flightDetailsUrlQueryParams } from "../models/Routes";

const FlightDetails: React.FC = () => {
	const [flightDetails, setFlightDetails] = useState([] as FlightDetailsInterface[] | boolean);

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

			console.log(flights);
		})();

		// Skyscanner.getFlightDetails(getFlightDetailsParams).then((details) => {
		// 	setFlightDetails(details as FlightDetailsInterface);
		// });
	}, [params.length]);
	return (
		<Container>
			{Array.isArray(flightDetails) &&
				flightDetails.length > 0 &&
				!flightDetails.includes(undefined) &&
				flightDetails.map((detail) => {
					return (
						<Box key={detail?.legs[0].id}>
							<h2>{detail?.legs[0].id}</h2>
						</Box>
					);
				})}
		</Container>
	);
};

export default FlightDetails;
