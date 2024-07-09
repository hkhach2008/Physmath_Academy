import React, { useState, useEffect } from 'react';
import styles from './Subject.module.scss'

import Button from '../Button/Button'

const Subject = ({ img, name, text, to, active }) => {

    const [truncatedText, setTruncatedText] = useState('');

    useEffect(() => {
        const truncate = (inputText) => {
            const words = inputText.split(' ');
            if (words.length > 20) {
                return words.slice(0, 20).join(' ') + '...';
            }
            return inputText;
        };

        setTruncatedText(truncate(text));
    }, [text]);

    return (
        <div className={styles.card}>
            <div className={styles.img}>
                <img src={img} alt="" />
            </div>
            <div className={styles.content}>
                <div className={styles.name}>{name}</div>
                <div className={styles.text}>{truncatedText}</div>
                <Button className={styles.btn} to={to} filled={false}>{active ? "Տեսնել ավելին" : "Շուտով"}</Button>
            </div>
        </div>
    )
}

export default Subject
