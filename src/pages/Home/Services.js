import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    paddingLeft:60
  },
  cover: {
    width: 151,
  },
  serviceName:{
    fontStyle:"italic",
    fontSize:20,
    color:"#046789"
  }
}));

const Services = props => {
  const classes = useStyles();
  const {name, image, class_name} = props;
  return (
    <Card className={classes.root} >
        <CardContent>
          <Grid container>
            <Grid item xs={12} >
              <img
              className={class_name}
              src = {image}
              alt= {name}
            />
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.serviceName}>
              {name}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
   
    </Card>
  );
}
export default Services