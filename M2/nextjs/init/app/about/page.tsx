import Link from 'next/link';

import type { Metadata } from 'next';
export const metadata: Metadata = {
	title: 'About page title',
	description: 'Description about page',
};

export default function About() {
	return (
		<div>
			<h1 className='text-2xl font-bold mb-3'>About</h1>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quos inventore
				saepe reiciendis consequuntur, ea unde consequatur aliquid dignissimos ex
				quibusdam, harum maxime labore tempore et autem repellendus dolorum distinctio.
				<br />
				<br />
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit porro provident
				consequuntur repudiandae temporibus unde expedita rerum, asperiores aspernatur
				dignissimos error tenetur accusantium recusandae laborum non nam voluptatem
				autem ad?
			</p>
		</div>
	);
}
