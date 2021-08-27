import React from 'react';
import styles from './css/NotFound.module.css';
import { Button, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router';

const NotFound = () => {
    const navigate = useNavigate();

    const onClick = () => navigate('/');

    return (
        <div className={styles.container} >
            <Typography align="center" variant="h2" component="h1">
                PAGE NOT FOUND
            </Typography>
            <Button onClick={onClick} className={styles.button} variant="outlined">Home</Button>
        </div>
    )
}

export default NotFound;