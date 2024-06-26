import { Box, Button, Container, Link, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { FlightDetails as FlightDetailsInterface } from "../models/Skyscanner";
import { useParams, useSearchParams } from "react-router-dom";
import Skyscanner from "../api/Skyscanner";
import { flightDetailsUrlQueryParams } from "../models/Routes";
import CardFlightDetails from "../components/CardFlightDetails";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import Loading from "../components/ui/Loading";

function createData(name: string, price: number, url: string) {
	return { name, price, url };
}

const FlightDetails: React.FC<FlightDetailsProps> = ({ displayLike }) => {
	const [flightDetails, setFlightDetails] = useState([] as FlightDetailsInterface[] | boolean);
	const [loader, setLoader] = useState(false);
	const [searchParams] = useSearchParams();

	const [rowsOne, setRowsOne] = useState<any>([]);
	const [rowsTwo, setRowsTwo] = useState<any>([]);

	// const [firstFlightIdWithLegs, setFirstFlightIdWithLegs] = useState<string>('')
	// const [secondFlightIdWithLegs, setSecondFlightIdWithLegs] = useState<string>('')

	let params = JSON.parse(searchParams.get(flightDetailsUrlQueryParams.params) ?? "");

	// const fetchFlights = (params) => {
	// 	return params.map(async (param: string) => {
	// 		const flight = await Skyscanner.getFlightDetails(param);

	// 		return flight;
	// 	});
	// };

	const pricingOptionsToRow = (array: any) => {
		array = array.map((value: any) => {
			const agent = value.agents[0];
			return createData(agent.name, agent.price, agent.url);
		});

		console.log(array);
		return array;
	};

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
			let index = 0;
			for await (let param of params) {
				param = param.replaceAll("%", "");
				const flight = (await Skyscanner.getFlightDetails(param)) as FlightDetailsInterface[] | boolean;

				if (flight && typeof flight !== "boolean") {
					flight.url = param;
					flights.push(flight);

					// TODO : optimize this row in one state
					setRowsOne(pricingOptionsToRow(flight.pricingOptions));
					// if second flight exist
					if (index === 1) {
						setRowsTwo(pricingOptionsToRow(flight.pricingOptions));
					}
				}
				index++;
			}

			setFlightDetails(flights);
			console.log(flights);
			if (flights.length && !flights.includes(undefined)) {
				setLoader(false);
			}
		})();
	}, [params.length]);

	return (
		<Container>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "20px",
				}}>
				<Typography variant="h4">Détail du vol</Typography>
				{Array.isArray(flightDetails) &&
					flightDetails.length > 0 &&
					!flightDetails.includes(undefined) &&
					flightDetails.map((detail, index) => {
						return (
							<Box
								key={detail?.legs[0].id}
								sx={{
									boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
									borderRadius: "8px",
									padding: "12px",
								}}>
								<CardFlightDetails displayLike={true} flightLeg={detail?.legs[0]} url={detail.url} />

								<Typography variant="h5" sx={{ marginTop: "30px", marginBottom: "20px" }}>
									Tous les prix
								</Typography>
								<TableContainer component={Paper}>
									<Table aria-label="simple table">
										<TableHead>
											<TableRow>
												<TableCell>Nom</TableCell>
												<TableCell>Price</TableCell>
												<TableCell>Url</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											{index === 0 &&
												rowsOne.map((row) => (
													<TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
														<TableCell component="th" scope="row">
															{row.name}
														</TableCell>
														<TableCell>{row.price}€</TableCell>
														<TableCell>
															<Link target="_blank" href={row.url}>
																Voir l'offre
															</Link>
														</TableCell>
													</TableRow>
												))}

											{index === 1 &&
												rowsTwo.map((row) => (
													<TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
														<TableCell component="th" scope="row">
															{row.name}
														</TableCell>
														<TableCell>{row.price}€</TableCell>
														<TableCell>
															<Link target="_blank" href={row.url}>
																Voir l'offre
															</Link>
														</TableCell>
													</TableRow>
												))}
										</TableBody>
									</Table>
								</TableContainer>
							</Box>
						);
					})}
			</Box>

			{loader && <Loading />}
		</Container>
	);
};

export default FlightDetails;
