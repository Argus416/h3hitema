import Link from 'next/link';

async function getData() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

export default async function LatestArticles() {
	const data = await getData();

	return (
		<ul className='list-disc ml-10'>
			{data.map((item: any) => (
				<li key={item.id}>
					<Link href={`/article/${item.id}`}>{item.title}</Link>
				</li>
			))}
		</ul>
	);
}
