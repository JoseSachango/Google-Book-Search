import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
      },
      control: {
        padding: theme.spacing(2),
      },
  }));



function Saved() {

    const classes = useStyles()

return(

    <Grid container className={classes.root} spacing={2}>

        <Grid container>
            <Grid item >
                <Paper className={classes.paper} >
                    Banner
                </Paper>
            </Grid>
        </Grid>

        <Grid container>
            <Grid item>
                    <Paper className={classes.paper} >
                        Books display
                    </Paper>
            </Grid>
        </Grid>

    </Grid>




)







}


export default Saved