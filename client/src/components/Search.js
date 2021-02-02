import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Block, TrendingUpRounded } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    root2:{
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
          },
    },
    textField: {
        width: '25ch',
      },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    paper: {
        
        height: 100,
        
            
        
       
      },
    control: {
        padding: theme.spacing(2),
    },
    row: {
        height: 50,
        margin: 50,
        xs: 12
        
         
       
    },
    row2: {
        height: 200,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50
       
    },
    margin: {
        margin: theme.spacing(1),
        width: "150ch",
        marginTop: 25

      },
    row3:{
        height: 250,
        marginLeft:50,
        marginRight: 50,
        marginTop:20
        
    },
    banner:{
        height: 120,
      
    },
    searchBox:{
        height: 200
    },
    subBanner:{
        
        fontSize: 25
    },
    heading: {
        display: "block",
        marginLeft: 25,
        marginRight: 1300,
        marginBottom: 5,
   


    },
    heading2 :{
        marginLeft: 0,
        
    

        
    },
    button:{
        marginLeft:1250
    },
    results:{
        height: 250
    },


  }));



function Search() {

    const classes = useStyles()

return(


    <Grid container className={classes.root} spacing={2}>

            <Grid container className={classes.row} >
                <Grid item xs={12}>
                    <Paper className={classes.banner}  >

                        <Typography variant="h3" gutterBottom={true}>
                            (React) Google Books Search
                         
                        </Typography>
                        <Typography variant="h7">
                                Search for and Save Books of Interest
                        </Typography>
                   

                        
                    </Paper>
                </Grid>
            </Grid>

            <Grid container  className={classes.row2} >
                <Grid item xs={12} >
                        <Paper className={classes.searchBox} >

                            <Typography className={classes.heading} variant="h6" gutterBottom={true}>
                               Book Search
                            </Typography>

                            
                            <Typography className={classes.heading2} variant="h9" gutterBottom={true}>
                                Book
                            </Typography>
                            
                            

                            <FormControl  className={classes.margin} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"

                                />
                            </FormControl>

                            <Button className={classes.button} variant="contained" color="primary">
                                Search
                            </Button>

                        </Paper>
                </Grid>
            </Grid>


            <Grid container  className={classes.row3} >
                <Grid item xs={12} >
                        <Paper className={classes.results} >

                            

                        </Paper>
                </Grid>
            </Grid>


            

       
            


    </Grid>


)






}


export default Search