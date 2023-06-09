import React from 'react';
import styles from './Home.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';

const Home = () => {
    const sigInLinkStyle = {
        color: '#0077ff',
        fontWeight: 'bold',
        TextDecoder: 'none',
        marginLeft: '10px',
    };

    const navigate = useNavigate();

    const startRegister = () => {
        navigate('/register');
    };


    return (
        <div className={styles.cardWrapper}>
            <Card title="Welcome to Coderhouse!" icon="hello_logo">
                <p className={styles.text}>
                    We’re working hard to get Codershouse
                    ready for everyone! While we wrap up
                    the finishing youches, we’re adding
                    people gradually to make sure nothing
                    breaks :)
                </p>
                <div>
                    <Button onClick={startRegister} content='Get your username' logo='arrow_forward'></Button>
                </div>
                <div className={styles.siginWrapper}>
                    <span className={styles.hasInvite}>Have an invite text ?</span>
                    <Link style={sigInLinkStyle} to="/login">Sign in</Link>
                </div>
            </Card>
        </div>
    )
}

export default Home;