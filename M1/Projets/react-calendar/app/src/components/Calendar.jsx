import { Box, Button } from "@mui/material";
import { useMemo, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { getDaysInMonth, getDaysInMonthUTC, getLastWeek, rangeDate } from "../Helpers/Date";
import TextField from "@mui/material/TextField";
import _ from "loadsh";

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

	let currentMonth = getDaysInMonthUTC(month, year);
	currentMonth = _.chunk(currentMonth, 7);
	// const renduCalendrier = () => {
	// 	const calendrier = [];
	// 	{
	// 		currentMonth.map((day, index) => {
	// 			day = day.getDate();
	// 			if (index % 7 === 0 && index !== 0) {
	// 				calendrier.push(
	// 					<>
	// 						<br /> {day} -
	// 					</>
	// 				);
	// 			} else {
	// 				calendrier.push(<> {day} - </>);
	// 			}
	// 		});
	// 	}
	// 	return calendrier;
	// };
	// renduCalendrier();

	return (
		<Box sx={{ height: "100vh" }}>
			<Box sx={{ marginTop: 5, display: "flex", alignItems: "center", gap: 2 }}>
				<Button variant="contained" onClick={() => setYear(year - 1)}>
					<ArrowBackIcon />
				</Button>
				<TextField
					id="outlined-number"
					label="Année"
					type="number"
					InputLabelProps={{
						shrink: true,
					}}
					value={year}
					onChange={(e) => setYear(e.target.value)}
				/>
				{/* {year} */}
				<Button variant="contained" onClick={() => setYear(year + 1)}>
					<ArrowForwardIcon />
				</Button>
			</Box>
			<Box sx={{ marginTop: 5, display: "flex", alignItems: "center", gap: 2 }}>
				<Button variant="contained" onClick={monthDes}>
					<ArrowBackIcon />
				</Button>
				{/* {month} */}
				<TextField
					id="outlined-number"
					label="Mois"
					type="number"
					InputLabelProps={{
						shrink: true,
					}}
					value={month}
					onChange={(e) => setMonth(e.target.value)}
				/>
				<Button variant="contained" onClick={monthInc}>
					<ArrowForwardIcon />
				</Button>
			</Box>
			<Box sx={{ marginTop: 5, display: "flex", justifyContent: "center", flexDirection: "column", gap: 2 }}>
				<table>
					<thead>
						<tr>
							<th>Lundi</th>
							<th>Mardi</th>
							<th>Mercredi</th>
							<th>Jeudi</th>
							<th>Vendredi</th>
							<th>Samedi</th>
							<th>Dimanche</th>
						</tr>
					</thead>
					<tbody>
						{currentMonth.map((week, weekIndex) => (
							<tr key={weekIndex} style={{ marginInline: 5 }}>
								{week.map((day, dayIndex) => (
									<td
										className={day.isInCurrentMonth ? "day-celendar" : "day-celendar old-date"}
										key={dayIndex}
										style={{ textAlign: "center" }}
									>
										{day.day.getDate()}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</Box>
		</Box>
	);
};

export default Calendar;
