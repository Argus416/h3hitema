import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Appointements from "../../controllers/appointments";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 600,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

const DeleteAppointmentModal = ({ openModal, closeModal, date }) => {
	const user = useSelector((state) => state.user);
	const navigate = useNavigate();
	const createAppointmentHandler = async (event) => {
		event.preventDefault();
		try {
			const form = event.target;
			const data = {
				title: form.title.value,
				description: form.description.value,
				userId: user.id,
				rdv: date,
			};

			const deleteAppointement = await Appointements.deleteAppointment(data);
			console.log(deleteAppointement);
			navigate("/");
		} catch (err) {
			console.error("Unable to create appointment from api", err);
		}
	};

	return (
		<div>
			<Modal open={openModal} onClose={closeModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
				<Box>
					<Typography variant="4" color="initial">
						Je supprimer le rendez-vous
					</Typography>
					<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
						Creéer un rendez-vous
					</Button>
				</Box>
			</Modal>
		</div>
	);
};

export default DeleteAppointmentModal;
