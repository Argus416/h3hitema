import { Autocomplete, Box, Button, Grid, TextField } from "@mui/material";
import MyDateTimePicker from "./MyDateTimePicker";
import React, { useState } from "react";
import { convertDateToEngFormat } from "../utils/Helper";
import { Airport, Flight, GetFlightsParams } from "../models/Skyscanner";
import Skyscanner from "../api/Skyscanner";

interface SearchFlight {
	extractResult?: Function;
}

const SearchFlight: React.FC<SearchFlight> = ({ extractResult }) => {
	// const [flights, setFlights] = useState([] as Flight[]);
	const [destination, setDestination] = useState("");
	const [destinationList, setDestinationList] = useState([]);

	const [arrival, setArrival] = useState("");
	const [arrivalList, setArrivalList] = useState([]);

	const onInputHandler = async (e) => {
		let airports = (await Skyscanner.getAllAirport(e)) as Airport[];
		if (airports) {
			airports = airports.map((el) => {
				const obj = {
					label: Math.random().toString(),
					value: Math.random().toString(),
				};

				return obj;
			}) as any;
			setDestinationList(airports as any);
		}
	};

	const submitHandler = async (e: React.FormEvent) => {
		e.preventDefault();
		const form = e.currentTarget as HTMLFormElement;
		const formData = new FormData(form);

		const departureDate = convertDateToEngFormat(formData.get("departure_date"));
		const arrivalDate = convertDateToEngFormat(formData.get("arrival_date"));

		const values = {
			origin: formData.get("origin"),
			destination: formData.get("destination"),
			passenger: formData.get("passenger"),
			date: departureDate,
			returnDate: arrivalDate,
		} as GetFlightsParams;

		const searchResult = (await Skyscanner.getAllFlights({ ...values })) as Flight[];
		// setFlights(searchResult.slice(0, 20));

		if (extractResult) {
			extractResult(searchResult?.slice(0, 20));
		}

		console.log(searchResult);
	};

	return (
		<Box component="form" className="searchFlight" onSubmit={submitHandler}>
			<Grid container spacing={2}>
				<Grid item sx={{ width: "50%" }}>
					<TextField
						sx={{ width: "100%" }}
						name="origin"
						id="outlined-basic"
						label="De"
						variant="outlined"
						value="LOND"
						// options={arrivalList}
						// renderInput={(params) => <TextField {...params} label="Movie" onInput={(e: any) => onInputHandler(e.target.value)} />}
					/>
				</Grid>
				<Grid item sx={{ width: "50%" }}>
					<TextField
						sx={{ width: "100%" }}
						name="destination"
						id="outlined-basic"
						label="A"
						variant="outlined"
						value="NYCA"
						// options={destinationList}
						// renderInput={(params) => <TextField {...params} label="Movie" onInput={(e: any) => onInputHandler(e.target.value)} />}
					/>
				</Grid>
			</Grid>

			<TextField sx={{ width: "100%", marginBlock: "20px" }} name="passenger" id="outlined-basic" label="Passager" variant="outlined" type="number" />

			<Grid container spacing={2}>
				<Grid item sx={{ width: "50%" }}>
					<MyDateTimePicker name="departure_date" label="Départ" />
				</Grid>
				<Grid item sx={{ width: "50%" }}>
					<MyDateTimePicker name="arrival_date" label="Arrivé" required={false} />
				</Grid>
			</Grid>

			<Box sx={{ textAlign: "center", marginTop: "20px" }}>
				<Button sx={{ width: "200px" }} variant="contained" type="submit">
					Rechercher
				</Button>
			</Box>
		</Box>
	);
};

export default SearchFlight;