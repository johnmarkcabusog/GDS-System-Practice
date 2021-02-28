import React from "react"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    menu:{
        color: "white",
        '&:hover': {
            color: '#DB9B00',
            cursor: 'pointer'
          }
    },
    welcome:{
        color: "white",
        paddingTop:10,
        fontSize:14,
        float: "left"
    },
    menuList:{
        float:"right"
    }
  }));

const Header =()=>{
    const classes = useStyles();
    return(
        <AppBar style={{backgroundColor: "#046789", float:"right"}}>
            <Toolbar style={{minHeight:40 }} >
              <Grid container>
                <Grid item xs={12} sm={8}>
                <Typography className={classes.welcome}>
                  WELCOME TO GOT TRIP TRAVEL
                </Typography>
                </Grid>  
                <Grid item xs={12} sm={4}>
                    <Button className={classes.menu} >Home</Button>
                    <Button className={classes.menu} >Services</Button>
                    <Button className={classes.menu} >E-Loading</Button>
                    <Button className={classes.menu} >Gallery</Button>
                    <Button className={classes.menu} >Blog Articles</Button>
                </Grid>  
              </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header