import React, { Fragment, useContext, useEffect} from 'react';
import styles from './css/ProductDetails.module.css';
// Material-ui components
import { Breadcrumbs, Grid, Typography, Button } from '@material-ui/core';
// Material-ui icons
import { NavigateNext } from '@material-ui/icons';
// Routing elements
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
// Context
import globalContext from '../../context/global/globalContext';

const ProductDetails = () => {
    // Get slug
    const { slug } = useParams();
    // Get function to set current
    const { current, setCurrent } = useContext(globalContext);

    const navigate = useNavigate();

    useEffect(() => {
        // Use function and slug to set current
        setCurrent(slug);
        // Check if wrong product is entered in URL
        if(current !== null){
            if(current.name === null){
                // Navigate to Page not found
                navigate('/page-not-found');
            }
        }
        // eslint-disable-next-line
    }, [current])

    if(current === null) return null;

    const { name, image, price } = current;
    
    return (
        <Fragment>
            <div className={styles.breakcrumbsContainer}>
                <Breadcrumbs separator={<NavigateNext fontSize="small" />} aria-label="breadcrumb">
                    <Link color="inherit" to="/products">
                        Products
                    </Link>
                    <Link color="inherit" to={`/products/${slug}`}>
                        {name}
                    </Link>
                </Breadcrumbs>
            </div>
            {
                current && (
                    <Grid
                        container
                        className={styles.grid}
                    >
                        <Grid item className={styles.gridItem} xs={12} md={6}>
                            <img src={image} alt={name} />
                        </Grid>
                        <Grid item className={styles.gridItem} xs={12} md={6}>
                            <Typography align="center" variant="h4" gutterBottom>{name}</Typography>
                            <Typography align="center" variant="body1" gutterBottom>Price ${price}</Typography>
                            <Button variant="outlined" size="large">BUY NOW</Button>
                        </Grid>
                    </Grid>
                )
            }
        </Fragment>
    )
}

export default ProductDetails;
