import React from "react"
import Fab from '@material-ui/core/Fab';
import ChatIcon from '@material-ui/icons/Chat';
import {makeStyles, createStyles} from "@material-ui/styles"

const useStyles = makeStyles((theme: Theme) => createStyles({
    floatButton: {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
    }
  }));
  
const FloatingButton = () =>{
    const classes = useStyles();

    return(      
        <Fab color="secondary" size="large" aria-label="scroll back to top" className={classes.floatButton}>
            <ChatIcon/>
        </Fab>
    )
}
export default FloatingButton