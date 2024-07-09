import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const Button = ({ to, className = '', filled, children }) => (
    <Link to={to} className={`${styles.btn} ${filled ? styles.in : styles.out} ${className}`}>
        {children}
    </Link>
);

export default Button;
