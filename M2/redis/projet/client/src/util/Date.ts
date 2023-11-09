export function formatDateInFrench(dateString: string) {
	if (!dateString) return;
	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		weekday: 'long',
		hour: 'numeric',
		minute: 'numeric',
	};

	const date = new Date(dateString);
	const formatter = new Intl.DateTimeFormat('fr-FR', options);

	return formatter.format(date);
}
