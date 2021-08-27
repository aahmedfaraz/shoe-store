import React, {useState} from 'react';
import styles from './css/Navbar.module.css';
import ahmedFarazIcon from '../../assets/images/ahmedfaraz-icon.png';
// Material-ui components
import { AppBar, IconButton, Toolbar, Typography, InputBase, alpha, makeStyles} from '@material-ui/core';
// Material-ui icons
import { Menu, Close, Search, ShoppingCart } from '@material-ui/icons';
// Routing element
import { Link } from 'react-router-dom';
import { useMatch } from 'react-router';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

const Navbar = () => {
  const [display, setDisplay] = useState(false);

  const classes = useStyles();

  const onClick = () => setDisplay(!display);

  const onSelect = () => setDisplay(false);

  return (
      <AppBar position="static" className={styles.appBar} >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={onClick}
          >
            {
              display ? <Close /> : <Menu />
            }
          </IconButton>
          <Typography className={`${classes.title} ${styles.title}`} variant="h6" noWrap>
            Nike . <span>Shoe Store <ShoppingCart /> </span>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
        <ul className={`${styles.menu} ${display && styles.display}`}>
          <Link onClick={onSelect} to="/" className={`${styles.a} ${ useMatch('/') && styles.active }`}>Home</Link>
          <Link onClick={onSelect} to="products" className={`${styles.a} ${ useMatch('products') && styles.active }`}>Products</Link>
          <p>Developed by Ahmed Faraz <img src={ahmedFarazIcon} alt="ahmedfaraz-icon" /></p>
        </ul>
      </AppBar>
  )
}

export default Navbar;
