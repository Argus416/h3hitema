import { TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import Skyscanner from "../api/Skyscanner";
import { Airport } from "../models/Skyscanner";
import CardAirport from "../components/ui/CardAirport";

const Airports: React.FC = () => {
	const [searchText, setSearchText] = useState("");
	const [searchResult, setSearchResult] = useState([] as Airport[]);
	const [fromIsSubmited, setFromIsSubmited] = useState(false);

	const searchAirport = async (e: React.FormEvent): Promise<void> => {
		e.preventDefault();
		const searchAirportRequest = (await Skyscanner.getAllAirport(searchText)) as Airport[];
		setSearchResult(searchAirportRequest);
		setFromIsSubmited(true);

		console.log(searchAirportRequest);
	};

	return (
		<Container>
			<Box>
				<form onSubmit={(e) => searchAirport(e)}>
					<TextField sx={{ width: "100%" }} label="Rechecher un aéroport" variant="outlined" onInput={(e: any) => setSearchText(e.target.value)} />
				</form>
			</Box>

			<Box sx={{ marginTop: 3 }}>
				{searchResult.length > 0 && fromIsSubmited && (
					<Box>
						<Typography> Trouvé {searchResult.length} résultat </Typography>
						<Box
							sx={{
								display: "grid",
								gridTemplateColumns: "repeat(3, 1fr)",
								gridGap: "15px",
								marginTop: "10px",
							}}
						>
							{searchResult.map((airport) => (
								<CardAirport key={airport.PlaceId} airport={airport} />
							))}
						</Box>
					</Box>
				)}

				{searchResult.length === 0 && fromIsSubmited && (
					<Box>
						<Typography> Aucune résultat n'a été trouvé</Typography>
					</Box>
				)}
			</Box>
		</Container>
	);
};

export default Airports;
