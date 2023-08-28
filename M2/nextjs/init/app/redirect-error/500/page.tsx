import ArticleError from '@/app/components/ArticleError';
import React from 'react';

export default function redirectError500() {
	return (
		<div>
			<ArticleError />
		</div>
	);
}
