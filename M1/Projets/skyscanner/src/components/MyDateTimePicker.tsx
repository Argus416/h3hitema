import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useState } from "react";

const MyDateTimePicker: React.FC = () => {
	const [value, setValue] = useState(dayjs("2022-04-07"));
	const setNewDate = (newValue: Dayjs | null): void => {
		const newDate = dayjs(newValue);
		console.log(newDate);
		setValue(newDate);
	};
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DateTimePicker
				// renderInput={(props) => {
				// return <h1>{props.inputProps?.value?.slice(0, -2)}</h1>;
				// }}
				renderInput={(props) => <TextField {...props} />}
				label="DateTimePicker"
				value={value}
				onChange={(newVal) => setNewDate(newVal)}
			/>
		</LocalizationProvider>
	);
};

export default MyDateTimePicker;
