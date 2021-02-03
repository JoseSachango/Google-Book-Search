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
    marginRight: 20,
  
    
  },
  title2:{
    marginLeft: 2,
    marginRight:20
  },
  search:{
    marginLeft: 5,
    marginRight: 5,
    [theme.breakpoints.up("xs")]:{
        display: "inline"
    }
  },
  saved:{
    marginLeft:5,
    marginRight:650,
    [theme.breakpoints.up("xs")]:{
        display: "inline"
    }

  },
  logInButton: {
      textAnchor: "right",
    
      
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                
                   <Grid item xs={9} >
                        <Grid container direction="row" justify="flex-start" alignItems="center">
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                Google Books
                            </Typography>
                            <Typography variant="h8" className={classes.search}>
                                <Button color="secondary">
                                    Search

                                </Button>
                            </Typography>
                            <Typography variant="h8" className={classes.saved}>
                                Save
                            </Typography>

                        </Grid>
                   </Grid>
                   <Grid item xs={3}>
                        <Grid container direction="row" justify="flex-end" alignItems="center">
                            <Button  color="inherit" className={classes.logInButton}>Login</Button>

                        </Grid>

                   </Grid>
                       

                   
                   
               
            </Toolbar>
        </AppBar>   
    </div>
  );
}