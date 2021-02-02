import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginLeft: 5,
    marginRight: 2,
  
    
  },
  title2:{
    marginLeft: 2,
    marginRight:20
  },
  search:{
    marginLeft: 5,
    marginRight: 5
  },
  saved:{
    marginLeft:5,
    marginRight:650

  },
  logInButton: {
      marginLeft: 420,
      marginRight: 0
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                     Google 
                </Typography>
                <Typography variant="h6" className={classes.title2}>
                     Books 
                </Typography>
                <Typography variant="h8" className={classes.search}>
                     Search
                </Typography>
                <Typography variant="h8" className={classes.saved}>
                     Saved
                </Typography>
                <Button color="inherit" className={classes.logInButton}>Login</Button>
            </Toolbar>
        </AppBar>   
    </div>
  );
}