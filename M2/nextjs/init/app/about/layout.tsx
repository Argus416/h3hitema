import React from 'react';
import styles from './about.module.css';

export default function AboutLayout({ children }: { children: React.ReactNode }) {
	return (
		<main>
			<section>{children}</section>
		</main>
	);
}
