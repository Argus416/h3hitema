import { Box, Button, Container, Typography } from "@mui/material";
import Calendar from "../components/Calendar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CreateAppointmentModal from "../components/CreateAppointmentModal";

const Home = () => {
	const [selectedDate, setSelectedDate] = useState();
	const [openModal, setOpenModal] = useState(false);

	const currentUser = useSelector((state) => state.user);
	const navigate = useNavigate();

	const selecteDate = (date) => {
		setSelectedDate(date);
		setOpenModal(true);
		console.log(date);
	};

	const closeModal = () => {
		setOpenModal(false);
	};

	return (
		<Container sx={{ marginTop: 3 }}>
			{currentUser.isLoggedIn ? (
				<Box>
					<CreateAppointmentModal openModal={openModal} closeModal={closeModal} date={selectedDate} />
					<Calendar selecteDate={selecteDate} />
				</Box>
			) : (
				<Box>
					<Typography variant="h4" color="initial">
						Vous n'êtes pas connecté, veuillez créer un compte
					</Typography>

					<Button variant="contained" sx={{ marginTop: 3 }} onClick={() => navigate("/login")}>
						Login
					</Button>
				</Box>
			)}
		</Container>
	);
};

export default Home;
