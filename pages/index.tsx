import Head from 'next/head';
import { useState } from 'react';

import styles from '../styles/Home.module.css';

export default function Home() {
	const [displayValue, setDisplayValue] = useState<number>(0);

	return (
		<div className={styles.container}>
			<Head>
				<title>Calculator</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/cat.ico" />
			</Head>
			<div className={styles.container}>
				<div className={styles.displayValue}>{displayValue}</div>
			</div>
		</div>
	);
}
