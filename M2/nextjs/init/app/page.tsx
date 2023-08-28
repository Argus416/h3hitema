import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import Loading from '@/app/components/loading';
import Articles from '@/app/components/Articles';

export default function Home() {
	return (
		<main className=''>
			<Suspense fallback={<Loading />}>
				<Articles />
			</Suspense>
		</main>
	);
}
