import React from 'react'
import styles from './Button.module.css';

const Button = ({ content, logo,onClick }) => {
    return (
        <button onClick={onClick} className={styles.button}>
            <span>{content}</span>
            <img className={styles.arrow} src={`/images/${logo}.png`} alt={logo} />
        </button>
    )
}

export default Button