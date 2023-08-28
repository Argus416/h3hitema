'use client';
import Link from 'next/link';
import Article from '../../components/Article';

import { Suspense } from 'react';
import Loading from '../../components/loading';

type Params = {
	params: {
		articleId: string;
	};
};

export default function ArticlePage({ params }: Params) {
	return (
		<div>
			<Suspense fallback={<Loading />}>
				<Article articleId={params.articleId} />
			</Suspense>
		</div>
	);
}
