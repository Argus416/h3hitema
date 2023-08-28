'use client';
import Error from 'next/error';
import React from 'react';

export default function notFound() {
	return (
		<Error
			title='Page not found'
			statusCode={404}
		/>
	);
}
