import { Box, Button } from "@mui/material";
import { useMemo, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { getDaysInMonth, getDaysInMonthUTC, getLastWeek, rangeDate } from "../Helpers/Date";
import TextField from "@mui/material/TextField";

import moment from "moment";

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

	const prevMongth = getDaysInMonthUTC(month - 1, year - 1);
	const currentMonth = getDaysInMonthUTC(month, year);
	const nextMonth = getDaysInMonthUTC(month + 1, year + 1);

	const allDaysGroupedOrder = useMemo(() => rangeDate(currentMonth), [year, month]);

	// console.log("====================================");
	console.log(allDaysGroupedOrder, "toto");
	// console.log("====================================");

	return (
		<Box sx={{ height: "100vh" }}>
			<Box sx={{ marginTop: 5, display: "flex", alignItems: "center", gap: 2 }}>
				<Button variant="contained" onClick={() => setYear(year - 1)}>
					<ArrowBackIcon />
				</Button>
				<TextField
					id="outlined-number"
					label="Number"
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
					label="Number"
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
				{/* <p>{currentMonth.join(", ")}</p> */}

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
						<tr style={{ textAlign: "center" }}>
							<td>1</td>
							<td>2</td>
							<td>3</td>
							<td>4</td>
							<td>5</td>
							<td>6</td>
							<td>7</td>
						</tr>
					</tbody>
				</table>
			</Box>
		</Box>
	);
};;;;;;;;;;;;;;;;;;;;;

export default Calendar;
