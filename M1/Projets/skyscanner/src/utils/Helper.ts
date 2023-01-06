export const convertDateToEngFormat = (date: FormDataEntryValue | null) => {
	const dateInString = date as string;
	const result = dateInString.split("/").reverse().join("-");

	return result;
};

export const getTime = (date: string | Date): string => {
	date = new Date(date);

	const hours = date.getHours().toString().padStart(2, "0");
	const minutes = date.getMinutes().toString().padStart(2, "0");

	const result = `${hours}:${minutes}`;

	return result;
};
