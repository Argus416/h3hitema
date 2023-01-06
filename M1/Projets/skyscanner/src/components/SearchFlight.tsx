import { Box, Button, Grid, TextField } from "@mui/material";
import MyDateTimePicker from "./MyDateTimePicker";
import React from "react";

const SearchFlight: React.FC = () => {
	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		const form = e.currentTarget as HTMLFormElement;
		const formData = new FormData(form);
		const values = {
			from: formData.get("from"),
			to: formData.get("to"),
			passenger: formData.get("passenger"),
			departure_date: formData.get("departure_date"),
			arrival_date: formData.get("arrival_date"),
		};

		console.log(values);
	};

	return (
		<Box component="form" className="searchFlight" onSubmit={submitHandler}>
			<Grid container spacing={2}>
				<Grid item sx={{ width: "50%" }}>
					<TextField sx={{ width: "100%" }} name="from" id="outlined-basic" label="De" variant="outlined" />
				</Grid>
				<Grid item sx={{ width: "50%" }}>
					<TextField sx={{ width: "100%" }} name="to" id="outlined-basic" label="A" variant="outlined" />
				</Grid>
			</Grid>

			<TextField sx={{ width: "100%", marginBlock: "20px" }} name="passenger" id="outlined-basic" label="Passager" variant="outlined" type="number" />

			<Grid container spacing={2}>
				<Grid item sx={{ width: "50%" }}>
					<MyDateTimePicker name="departure_date" label="Départ" />
				</Grid>
				<Grid item sx={{ width: "50%" }}>
					<MyDateTimePicker name="arrival_date" label="Arrivé" />
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
