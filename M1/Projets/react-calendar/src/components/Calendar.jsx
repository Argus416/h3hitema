import { Box, Button } from "@mui/material";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { getDaysInMonth, getDaysInMonthUTC } from "../Helpers/Date";

const Calendar = () => {
	const date = new Date();
	const [year, setYear] = useState(date.getFullYear());
	const [month, setMonth] = useState(date.getMonth() + 1);
	const [days, setDays] = useState([]);

	const monthInc = () => {
		if (month === 12) {
			setYear(year + 1);
			setMonth(1);
		} else {
			setMonth(month + 1);
		}
	};

	const monthDes = () => {
		if (month === 1) {
			setYear(year - 1);
			setMonth(12);
		} else {
			setMonth(month - 1);
		}
	};

	let allDays = getDaysInMonth(month, year);
	allDays = allDays.map((day) => day + " ").join();
	console.log(allDays, "allDays");
	return (
		<Box>
			<Box sx={{ marginTop: 5, display: "flex", alignItems: "center", gap: 2 }}>
				<Button variant="contained" onClick={() => setYear(year - 1)}>
					<ArrowBackIcon />
				</Button>
				{year}
				<Button variant="contained" onClick={() => setYear(year + 1)}>
					<ArrowForwardIcon />
				</Button>
			</Box>

			<Box sx={{ marginTop: 5, display: "flex", alignItems: "center", gap: 2 }}>
				<Button variant="contained" onClick={monthDes}>
					<ArrowBackIcon />
				</Button>
				{month}
				<Button variant="contained" onClick={monthInc}>
					<ArrowForwardIcon />
				</Button>
			</Box>

			<Box sx={{ marginTop: 5, display: "flex", alignItems: "center", gap: 2 }}>{allDays}</Box>
		</Box>
	);
};

export default Calendar;
