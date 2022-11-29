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

const DeleteAppointmentModal = ({ openModal, closeModal, idModal, updateUserEffectHandler }) => {
	const user = useSelector((state) => state.user);
	const navigate = useNavigate();
	const deleteAppointmentHandler = async (event) => {
		event.preventDefault();
		try {
			const deleteAppointement = await Appointements.deleteAppointment(idModal);
			updateUserEffectHandler();
			navigate("/");
			closeModal();
		} catch (err) {
			console.error("Unable to create appointment from api", err);
		}
	};

	return (
		<div>
			<Modal open={openModal} onClose={closeModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
				<Box component="form" sx={style} onSubmit={deleteAppointmentHandler}>
					<Typography variant="h6" color="initial">
						Êtes-vous sûr de vouloir supprimer le rendez-vous ?
					</Typography>

					<Button type="submit" fullWidth variant="contained" color="error" sx={{ mt: 3, mb: 2 }}>
						Je supprime le rendez-vous
					</Button>
				</Box>
			</Modal>
		</div>
	);
};

export default DeleteAppointmentModal;
