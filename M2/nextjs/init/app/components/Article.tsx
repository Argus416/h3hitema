async function getData(id: string) {
	try {
		const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
		// The return value is *not* serialized
		// You can return Date, Map, Set, etc.

		console.log({ res });

		return res.json();
	} catch (e) {
		console.log({ e });
	}
}

export default async function Article({ articleId }: { articleId: string }) {
	const data = await getData(articleId);
	console.log({ articleId });

	return (
		<div>
			<h1 className='text-2xl font-bold mb-3'>{data.title}</h1>
			<p>{data.body}</p>
		</div>
	);
}
