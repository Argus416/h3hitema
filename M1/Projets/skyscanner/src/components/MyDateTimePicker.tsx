import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";

interface MyDateTimePicker {
	name: string;
	label?: string;
	required?: boolean;
}

const MyDateTimePicker: React.FC<MyDateTimePicker> = ({ name, label, required }) => {
	const [value, setValue] = useState(dayjs("2023-04-07"));
	const setNewDate = (newValue: Dayjs | null): void => {
		const newDate = dayjs(newValue);
		setValue(newDate);
	};
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DatePicker
				// renderInput={(props) => {
				// return <h1>{props.inputProps?.value?.slice(0, -2)}</h1>;
				// }}
				inputFormat="DD/MM/YYYY"
				renderInput={(props) => <TextField {...props} sx={{ width: "100%" }} name={name} required={required ?? false} />}
				label={label}
				value={value}
				onChange={(newVal) => setNewDate(newVal)}
			/>
		</LocalizationProvider>
	);
};

export default MyDateTimePicker;
