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

	return (
		<Box component="main">
			<Container>
				<Typography variant="h3" sx={{ marginBlock: 5 }}>
					Je cherche un vol
				</Typography>
			</Container>

			<Container sx={{ marginBottom: "20px", overflow: "hidden" }}>
				<SearchFlight
					extractResult={(result: Flight[]) => {
						setFlights(result);
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

					{flights?.length < 0 && searchFlightIsSuppmited && (
						<Alert severity="error" sx={{ width: "100%" }}>
							Aucun vol n'a été trouvé
						</Alert>
					)}
				</Grid>
			</Container>

			{/* <Container
				sx={{
					display: "grid",
					gridGap: "20px",
					gridTemplateColumns: "repeat(3, 1fr)",
				}}
			>
				{cities.map((city) => (
					<SmallCard city={city} key={city.id} />
				))}
			</Container> */}
		</Box>
	);
};

export default Home;
