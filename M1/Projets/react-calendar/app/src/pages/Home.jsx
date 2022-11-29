import { Container, Typography, Button, Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Appointments from "../controllers/appointments";
import { readableDate } from "../Helpers/Date";

const CaroContainer = ({ appointment }) => {
	return (
		<Box>
			<Box sx={{ display: "flex", justifyContent: "space-between" }}>
				<Typography variant="h5" color="initial">
					{appointment.title}
				</Typography>

				<Typography variant="h5" color="initial">
					{readableDate(appointment.rdv)}
				</Typography>
			</Box>
			<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 3 }}>
				<Typography variant="h5" color="initial">
					{appointment.description}
				</Typography>

				<Box>
					<Button variant="outlined" color="error">
						Supprimer
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

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
							<CaroContainer appointment={appointment} />
						</Grid>
					))
				) : (
					<Button
						variant="contained"
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
