import React from 'react';

import styles from '../styles/Home.module.css';

const Button = ({ onClick, children }) => {
	return (
		<div className={styles.calcButton} onClick={(): void => onClick(children)}>
			{children}
		</div>
	);
};

export default Button;
