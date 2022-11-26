import { Container, Typography, Button, Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Appointments from "../controllers/appointments";

const Reservations = () => {
	const navigate = useNavigate();
	const currentUser = useSelector((state) => state.user);
	const [appointments, setAppointments] = useState([]);
	useEffect(() => {
		try {
			Appointments.getAppointments(currentUser.id).then((data) => setAppointments(data.data));
			console.log(appointments);
		} catch (err) {
			console.error("Unable to get appointments from api", err);
		}
	}, [appointments.length]);

	const readableDate = (date) => {
		date = new Date(date);
		return (
			<>
				{date.getFullYear()}/{date.getMonth() + 1}/{date.getDate()}
			</>
		);
	};

	return (
		<Container sx={{ marginTop: 3 }}>
			<Typography variant="h3" color="initial">
				Reservations
			</Typography>

			<Grid sx={{ marginTop: 4 }}>
				{appointments.length > 0 ? (
					appointments.map((appointment) => (
						<Grid
							item
							key={appointment.id}
							sx={{
								border: "1px solid #333",
								display: "flex",
								flexDirection: "column",
								gap: 2,
								marginBottom: 3,
								paddingBlock: 2,
								paddingInline: 3,
							}}
						>
							<Box sx={{ display: "flex", justifyContent: "space-between" }}>
								<Typography variant="h5" color="initial">
									{appointment.title}
								</Typography>

								<Typography variant="h5" color="initial">
									{readableDate(appointment.rdv)}
								</Typography>
							</Box>
							<Typography variant="h5" color="initial">
								{appointment.description}
							</Typography>
						</Grid>
					))
				) : (
					<Button
						variant="container"
						onClick={() => {
							navigate("/calendar");
						}}
					>
						Je créé mon 1èr rendre-vous
					</Button>
				)}
			</Grid>
		</Container>
	);
};

export default Reservations;
