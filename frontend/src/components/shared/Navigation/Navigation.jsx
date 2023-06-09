import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
    const brandStyle = {
        color : '#fff',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '22px',
        display: 'flex',
        flexDirection : 'row',
        alignItems: 'center'
    }

    const logoText = {
        marginLeft: '10px',
    }

    return (
        <nav className={`${styles.navbar} container`}>
            <Link style={brandStyle} to="/">
                <img src="/images/hello_logo.png" alt="Logo" />
                <span style={logoText}>Codershouse</span>
            </Link>
        </nav>
    )
}

export default Navigation

// Link se page refresh ni hta h