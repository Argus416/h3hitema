import SmallCard from "../components/SmallCard";
import { Box, Container, Typography } from "@mui/material";
import { City } from "../models/Public";
import CardFlight from "../components/CardFlight";
import SearchFlight from "../components/SearchFlight";

const Home = () => {
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
					Home page
				</Typography>
			</Container>

			<Container>
				<SearchFlight />
			</Container>

			<Container
				sx={{
					display: "grid",
					gridGap: "20px",
					gridTemplateColumns: "repeat(3, 1fr)",
				}}
			>
				{cities.map((city) => (
					<SmallCard city={city} key={city.id} />
				))}
			</Container>
		</Box>
	);
};

export default Home;
