import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Appointements from "../../controllers/appointments";
import { useState } from "react";

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

const UpdateAppointmentModal = ({ openModal, closeModal, appointment, updateUserEffectHandler }) => {
	const navigate = useNavigate();
	const updateAppointmentHandler = async (event) => {
		event.preventDefault();
		try {
			// const update = await Appointements.deleteAppointment();
			const form = event.target;
			const formData = {
				title: form.title.value,
				description: form.description.value,
			};

			const updateUser = await Appointements.updateAppointment(formData, appointment.id);
			console.log(updateUser, "updateUser");

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
				<Box component="form" sx={style} onSubmit={updateAppointmentHandler}>
					<Typography variant="h6" color="initial">
						Êtes-vous sûr de vouloir modifier le rendez-vous ?
					</Typography>

					<TextField
						autoFocus
						required
						fullWidth
						defaultValue={appointment.title}
						margin="normal"
						id="title"
						label="title"
						name="title"
						placeholder="title"
					/>
					<TextField fullWidth multiline id="description" defaultValue={appointment.description} name="description" label="Description" rows={3} />

					<Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, mt: 3, mb: 2 }}>
						<Button fullWidth variant="contained" color="warning" onClick={() => closeModal()}>
							Annuler
						</Button>

						<Button type="submit" fullWidth variant="contained">
							Modifier le rendez-vous
						</Button>
					</Box>
				</Box>
			</Modal>
		</div>
	);
};

export default UpdateAppointmentModal;
