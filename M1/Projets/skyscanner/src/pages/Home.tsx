import SmallCard from "../components/SmallCard";
import { Box, Container, Typography } from "@mui/material";
import { City } from "../models/Public";
import CardFlight from "../components/CardFlight";
import SearchFlight from "../components/SearchFlight";
import { Flight } from "../models/Skyscanner";
import { useState } from "react";

const Home = () => {
	const [flights, setFlights] = useState([] as Flight[]);

	const cities: City[] = [
		{
			id: crypto.randomUUID(),
			name: "Paris",
			url: "https://picsum.photos/640/360",
		},

		{
			id: crypto.randomUUID(),
			name: "Rome",
			url: "https://picsum.photos/640/360",
		},

		{
			id: crypto.randomUUID(),
			name: "Vienne",
			url: "https://picsum.photos/640/360",
		},
	];

	return (
		<Box component="main">
			<Container>
				<Typography variant="h3" sx={{ marginBlock: 5 }}>
					Je cherche un vol
				</Typography>
			</Container>

			<Container sx={{ marginBottom: "20px" }}>
				<SearchFlight
					extractResult={(result: Flight[]) => {
						setFlights(result);
					}}
				/>
			</Container>

			{flights?.length > 0 && flights?.map((flight) => <CardFlight key={flight.id} flight={flight} />)}

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
