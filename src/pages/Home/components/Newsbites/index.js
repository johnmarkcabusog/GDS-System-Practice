import React from "react"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      height: "100%"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
const Newsbites = () =>{
    const classes = useStyles();

    return(
       <Paper>
       </Paper>
    )
}

export default Newsbites