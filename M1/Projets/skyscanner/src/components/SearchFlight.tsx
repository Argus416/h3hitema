import { Autocomplete, Box, Button, Grid, TextField } from "@mui/material";
import MyDateTimePicker from "./MyDateTimePicker";
import React, { useState } from "react";
import { convertDateToEngFormat } from "../utils/Helper";
import { Airport, Flight, GetFlightsParams } from "../models/Skyscanner";
import Skyscanner from "../api/Skyscanner";
import { AutocompleteInterface } from "../models/Public";

interface SearchFlight {
	extractResult?: Function;
}

const SearchFlight: React.FC<SearchFlight> = ({ extractResult }) => {
	// const [flights, setFlights] = useState([] as Flight[]);
	const [destination, setDestination] = useState("");
	const [destinationList, setDestinationList] = useState([] as AutocompleteInterface[]);

	const [origin, setOrigin] = useState("");
	const [originList, setOriginList] = useState([] as AutocompleteInterface[]);

	const loadAirportsForAutocomplete = async (city: string): Promise<AutocompleteInterface[] | boolean> => {
		let airports: Airport[] | AutocompleteInterface[] = (await Skyscanner.getAllAirport(city)) as Airport[];

		if (airports) {
			console.log(airports);

			airports = airports.map((el) => {
				const obj: AutocompleteInterface = {
					label: `${el.CountryName} - ${el.PlaceName}`,
					value: el.PlaceId,
				};

				return obj;
			}) as any;
			return airports as AutocompleteInterface[];
		}
		return false;
	};

	const AutocompleteDestination = async (e) => {
		let airports: AutocompleteInterface[] | boolean = await loadAirportsForAutocomplete(e);

		if (airports) {
			setDestinationList(airports as AutocompleteInterface[]);
		}
	};

	const AutocompleteOrigin = async (e) => {
		let airports: AutocompleteInterface[] | boolean = await loadAirportsForAutocomplete(e);
		if (airports) {
			setOriginList(airports as AutocompleteInterface[]);
		}
	};

	const submitHandler = async (e: React.FormEvent) => {
		e.preventDefault();
		const form = e.currentTarget as HTMLFormElement;
		const formData = new FormData(form);

		const departureDate = convertDateToEngFormat(formData.get("departure_date"));
		const originDate = convertDateToEngFormat(formData.get("origin_date"));

		const values = {
			origin: origin,
			destination: destination,
			passenger: formData.get("passenger"),
			date: departureDate,
			returnDate: originDate,
		} as GetFlightsParams;

		console.log(values);

		const searchResult = (await Skyscanner.getAllFlights({ ...values })) as Flight[];
		// setFlights(searchResult.slice(0, 20));

		if (extractResult) {
			// extractResult(searchResult?.slice(0, 20));
			extractResult(searchResult);
		}

		console.log(searchResult);
	};

	return (
		<Box component="form" className="searchFlight" onSubmit={submitHandler}>
			<Grid container spacing={2}>
				<Grid item sx={{ width: "50%" }}>
					<Autocomplete
						onChange={(event, value) => (value ? setOrigin(value.value) : "")}
						sx={{ width: "100%" }}
						options={originList}
						renderInput={(params) => <TextField {...params} label="De" onInput={(e: any) => AutocompleteOrigin(e.target.value)} />}
					/>
				</Grid>
				<Grid item sx={{ width: "50%" }}>
					<Autocomplete
						sx={{ width: "100%" }}
						onChange={(event, value) => (value ? setDestination(value.value) : "")}
						options={destinationList}
						renderInput={(params) => {
							return <TextField {...params} label="à" onInput={(e: any) => AutocompleteDestination(e.target.value)} />;
						}}
					/>
				</Grid>
			</Grid>

			<TextField sx={{ width: "100%", marginBlock: "20px" }} name="passenger" id="outlined-basic" label="Passager" variant="outlined" type="number" />

			<Grid container spacing={2}>
				<Grid item sx={{ width: "50%" }}>
					<MyDateTimePicker name="departure_date" label="Départ" />
				</Grid>
				<Grid item sx={{ width: "50%" }}>
					<MyDateTimePicker name="origin_date" label="Retour" required={false} />
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
