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


export const getFullYear = (date: Date | string, seperator = "-", frenchFormat = false): string => {
	date = new Date(date);
	const year = date.getFullYear().toString();
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const day = date.getDate().toString().padStart(2, "0");
	let result = year + seperator + month + seperator + day;

	if (frenchFormat) {
		result = day + seperator + month + seperator + year;
	}
	return result;
};