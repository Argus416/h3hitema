import moment from "moment";
moment.locale("fr");

export const timeFromToday = (date) => {
	const today = moment();
	date = moment(date, "YYYY.MM.DD HH:mm");
	const diff = moment(now - before).format("D[ jour(s)] heurs[ hour(s)] minutes[ minute(s)] ");

	return diff;
};

export const formatDay = (date) => {
	date = new Date(date);
	date = moment(date, "YYYY.MM.DD HH:mm");
	const formated = moment(date).format("DD/MM/Y à HH:mm");

	return formated;
};
