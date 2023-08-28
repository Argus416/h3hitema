import Error from 'next/error';
import React from 'react';

export default function custom500() {
	return (
		<div>
			<div>
				<Error statusCode={500} />
			</div>
		</div>
	);
}
