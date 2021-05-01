import React from 'react';

import styles from '../styles/Home.module.css';

interface Button {
	children: React.ReactNode;
	onClick: (children: React.ReactNode) => void;
}

const Button = ({ onClick, children }: Button) => {
	return (
		<button
			className={styles.calcButton}
			onClick={(): void => onClick(children)}>
			{children}
		</button>
	);
};

export default Button;
