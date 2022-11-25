import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, TextField } from "@mui/material";
import { Link } from "react-router-dom";

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

const CreateAppointmentModal = ({ openModal, closeModal, date }) => {
	return (
		<div>
			<Modal open={openModal} onClose={closeModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
				<Box>
					<Box component="form" noValidate sx={style}>
						<TextField margin="normal" required fullWidth id="title" label="title" name="title" placeholder="title" autoFocus />
						<TextField id="description" name="description" fullWidth label="Multiline" multiline rows={3} />
						{date && (
							<Typography sx={{ textAlign: "center", marginTop: 2 }}>
								Je résèrve un rendez-vous pour le
								{" " + date.getFullYear()}/{date.getMonth() + 1}/{date.getDate()}
							</Typography>
						)}
						<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
							Creéer un rendez-vous
						</Button>
					</Box>
				</Box>
			</Modal>
		</div>
	);
};

export default CreateAppointmentModal;
