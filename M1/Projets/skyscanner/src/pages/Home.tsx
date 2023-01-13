import SmallCard from "../components/SmallCard";
import { Alert, Box, Container, Grid, Typography } from "@mui/material";
import { City } from "../models/Public";
import CardFlight from "../components/CardFlight";
import SearchFlight from "../components/SearchFlight";
import { Flight } from "../models/Skyscanner";
import { useState } from "react";

const Home = () => {
	const [flights, setFlights] = useState([] as Flight[]);
	const [searchFlightIsSuppmited, setSearchFlightIsSuppmited] = useState(false);
	const [errorMessage, setErrorMessage] = useState("Server is down" as string);

	return (
		<Box component="main">
			<Container>
				<Typography variant="h3" sx={{ marginBlock: 5 }}>
					Je cherche un vol
				</Typography>
			</Container>

			<Container sx={{ marginBottom: "20px" }}>
				<SearchFlight
					extractResult={(result: Flight[] | string) => {
						if (result === "Server is down" && typeof result === "string") {
							setErrorMessage("Server is down" as string);
						} else if (result.length && typeof result !== "string") {
							setFlights(result);
						} else {
							setErrorMessage("Aucun vol n'a été trouvé" as string);
						}
						setSearchFlightIsSuppmited(true);
					}}
				/>

				<Grid container spacing={2} justifyContent="space-between" marginTop="30px">
					{flights?.length > 0 &&
						searchFlightIsSuppmited &&
						flights?.map((flight) => (
							<Grid item key={flight.id}>
								<CardFlight flight={flight} />
							</Grid>
						))}

					{flights?.length === 0 && searchFlightIsSuppmited && (
						<Alert severity="error" sx={{ width: "100%" }}>
							{errorMessage}
						</Alert>
					)}
				</Grid>
			</Container>
		</Box>
	);
};

export default Home;
