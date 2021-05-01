import Head from 'next/head';
import { useState } from 'react';

import Button from '../components/Button';

import styles from '../styles/Home.module.css';

export default function Home() {
	const [displayValue, setDisplayValue] = useState<number>(0);

	const onClick = (value): void => {
		setDisplayValue(value);
	};

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
					<Button onClick={onClick}>7</Button>
					<Button onClick={onClick}>8</Button>
					<Button onClick={onClick}>9</Button>
					<Button onClick={onClick}>x</Button>
					<Button onClick={onClick}>4</Button>
					<Button onClick={onClick}>5</Button>
					<Button onClick={onClick}>6</Button>
					<Button onClick={onClick}>-</Button>
					<Button onClick={onClick}>1</Button>
					<Button onClick={onClick}>2</Button>
					<Button onClick={onClick}>3</Button>
					<Button onClick={onClick}>+</Button>
				</div>
				<div className={styles.zeroEqual}>
					<Button onClick={onClick}>C</Button>
					<Button onClick={onClick}>0</Button>
					<Button onClick={onClick}>=</Button>
				</div>
			</div>
		</div>
	);
}
