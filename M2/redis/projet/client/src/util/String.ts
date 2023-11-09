export function transformString(inputString: string) {
	const wordsArray = inputString.split('_');

	const transformedWords = wordsArray.map(
		(word) => word.charAt(0).toUpperCase() + word.slice(1)
	);

	const transformedString = transformedWords.join(' ');

	return transformedString;
}
