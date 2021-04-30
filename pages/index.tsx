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
				<div className={styles.calcContainer}>
					<button className={styles.calcButton}>7</button>
					<button className={styles.calcButton}>8</button>
					<button className={styles.calcButton}>9</button>
					<button className={styles.calcButton}>x</button>
					<button className={styles.calcButton}>4</button>
					<button className={styles.calcButton}>5</button>
					<button className={styles.calcButton}>6</button>
					<button className={styles.calcButton}>-</button>
					<button className={styles.calcButton}>1</button>
					<button className={styles.calcButton}>2</button>
					<button className={styles.calcButton}>3</button>
					<button className={styles.calcButton}>+</button>
					<button className={styles.calcButton}>0</button>
					<button className={styles.calcButton}>=</button>
				</div>
			</div>
		</div>
	);
}
