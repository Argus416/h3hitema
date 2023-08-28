import { useRouter } from 'next/navigation';

async function getData() {
	try {
		const res = await fetch(`https://jsonplaceholder.typicode.com/postse/1`);

		return res.json();
	} catch (e) {
		console.log({ e });
	}
}
export default async function ArticleError(props) {
	const data = await getData();
	console.log(props);
	return (
		<div className='ml-10'>
			<p>title: {data.title}</p>
			<p>body: {data.body}</p>
		</div>
	);
}
