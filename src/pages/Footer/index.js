import React from "react"
import {makeStyles, createStyles} from "@material-ui/styles"
import Grid from "@material-ui/core/Grid"
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme: Theme) => createStyles({
  footer:{
    width:"100%",
    backgroundColor:"#333333"
    },
    paddingFoot:{
      padding:20
    },
    icon:{
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      fontSize: 14,
      color: "#C0C0C0"
    },
    font:{
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      fontSize: 13,
      color: "#C0C0C0",
      padding:2,
      float: "left"
    },
    fontMessage:{
      padding:30
    },
    copyright:{
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      fontSize: 13,
      color: "#C0C0C0",
      padding:10,
      float: "center"
    },
  }));
  

const Footer = () => {
    const classes = useStyles();

    return(
    <div className={classes.footer}>
        <Grid container spacing={0}>
            {/* <Grid item xs={12} sm={2} className={classes.paddingFoot}>
                <Typography className={classes.font}>Netwit IT Solutions &nbsp;&nbsp; &#169;</Typography>
            </Grid> */}
            <Grid item xs={12} sm={4} className={classes.paddingFoot}>
              <Grid container>
                <Grid item xs={2}>
                   <Typography className={classes.icon}> <FacebookIcon/></Typography>
                </Grid>
                <Grid item xs={10}>
                   <Typography className={classes.font}> https://www.facebook.com/gotriptravelnow </Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={2}>
                   <Typography className={classes.icon}> <PhoneIcon/></Typography>
                </Grid>
                <Grid item xs={10}>
                   <Typography className={classes.font}> 0922 977 0714 </Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={2}>
                   <Typography className={classes.icon}> <EmailIcon/></Typography>
                </Grid>
                <Grid item xs={10}>
                   <Typography className={classes.font}> gottriptravel@gmail.com </Typography>
                </Grid>
              </Grid>
            </Grid>
            {/* <Divider orientation="vertical" flexItem/> */}
            <Grid item xs={12} sm={4} className={classes.fontMessage}>
            <Typography className={classes.font} >
                 We provide the best domestic and international travel products and services at the most reasonable price. Feel free to get in touch with us for appointments, bookings, or inquiries DTI registered DTI NO. 1224406
              </Typography>
            </Grid>
            {/* <Divider orientation="vertical" flexItem/> */}
            <Grid item xs={12} sm={3} className={classes.paddingFoot}>
            {/* <Typography className={classes.font} >
                 We provide the best domestic and international travel products and services at the most reasonable price. Feel free to get in touch with us for appointments, bookings, or inquiries DTI registered DTI NO. 1224406
              </Typography> */}
            </Grid>
        </Grid>
        <Divider orientation="horizontal"/>
            <Divider orientation="horizontal" flexItem/>
        <Grid container>
              <Grid item xs={12}>
              <Typography className={classes.copyright} >
                Privacy Policy &nbsp;|&nbsp; 2020 &#169; Netwit IT Solutions &nbsp;|&nbsp;  Site Map
              </Typography>
              </Grid>
        </Grid>
    </div>  
    )
}

export default Footer