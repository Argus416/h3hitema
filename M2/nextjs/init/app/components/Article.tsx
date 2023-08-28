import notFound from '../not-found';
import _ from 'lodash';
async function getData(id: string) {
	try {
		const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
		return res.json();
	} catch (e) {
		return false;
	}
}

export default async function Article({ articleId }: { articleId: string }) {
	const data = await getData(articleId);

	console.log(data);
	if (_.isEmpty(data)) {
		return notFound();
	}

	return (
		<div>
			<h1 className='text-2xl font-bold mb-3'>{_.capitalize(data.title)}</h1>
			<p>{data.body}</p>
		</div>
	);
}
