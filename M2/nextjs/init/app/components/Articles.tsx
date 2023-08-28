import Link from 'next/link';

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';

async function getData() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

export default async function Articles() {
	const data = await getData();

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>title</TableHead>
					<TableHead>body</TableHead>
					<TableHead></TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{data.map((item: any) => (
					<TableRow key={item.key}>
						<TableCell>{item.title}</TableCell>
						<TableCell key={item.key}>{item.body}</TableCell>
						<TableCell key={item.key}>
							<Link
								className='bg-green-500 px-4 py-1.5 rounded text-white'
								href={`/article/${item.id}`}
							>
								GO
							</Link>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
