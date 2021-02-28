import React from "react"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
// import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"
// import CardMedia from "@material-ui/core/CardMedia"
import {makeStyles, createStyles} from "@material-ui/styles"
import Background from "./assets/aerial-background.jpg"
// import messageImg from "./assets/hello.png"
import Header from "../Header"
// import Newsbites from "./components/Newsbites"
import Footer from "../Footer"
// import Gallery from "../Gallery"
import PermPhoneMsgRoundedIcon from '@material-ui/icons/PermPhoneMsgRounded';

const useStyles = makeStyles((theme: Theme) => createStyles({
  bg: {
    backgroundImage: `url(${Background})`,
    width:"100%",
    overflow: "auto",
    position:"fixed",
    height:"100%",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    top:0,
    backgroundSize:'cover',
  },
  newsbites:{
      height: 400,
      width:"100%",
      backgroundColor:"#046789"
  },
  mainPanel:{
    //   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  gallery:{
    width:"100%",
    height:400,
    backgroundColor:"white"
  },
  button:{
    fontSize: 25,
    paddingLeft: 30,
    paddingRight: 30,
    color:"white",
    marginTop:20,
    borderRadius:3,
    fontStyle:"italic",
    backgroundColor: "#0CC6C7",
  },
  panelTitle:{
    fontSize:30,
    padding:10,
    color:"white",
  },
  img:{
    height:200,
    width:300,
  },
  icons:{
      marginTop:85,
      fontSize:100,
      color: "#DB9B00"
  },
  textIcons:{
     marginTop:100, 
    fontStyle:"italic",
    fontSize:16,
    color:"white"
  }
}))

const Home = () =>{
    const classes = useStyles();

    return(
        <div className={classes.bg}>
            <Grid container>
            <Header/>
                <Grid item xs={12} sm={4} >
                  <Grid container  spacing={0}
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    style={{ minHeight: '60vh' }}>
                        <Grid item xs={12}>
                            <Typography style={{fontStyle:"bold", fontSize:40, color:"white"}}>
                                Travel.<span style={{color:"#DB9B00",fontStyle:"italic"}}>Live</span>.Breathe.
                            </Typography>
                            <Typography style={{fontStyle:"italic", fontSize:20, color:"white"}}>
                                Experience great life adventures.
                            </Typography>
                            <Button className={classes.button}>
                             SIGN UP TODAY
                         </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={8} style={{background: 'linear-gradient(90deg, transparent 30%,#08a0a0 60%)', opacity:"40%"}}>
                  
                </Grid>
                <Grid item xs={12} className={classes.newsbites}>
                    <Grid container>
                        <Grid item xs={12}>
                            <div style={{height:20, width:"100%", backgroundColor:"#DB9B00"}}></div>
                                {/* <Typography className={classes.panelTitle}> Why Book with Us?  </Typography> */}
                        </Grid>
                        <Grid item xs={6}>
                        <Grid container spacing={1}>
                                <Grid item xs={12} sm={2}>
                                    <PermPhoneMsgRoundedIcon className={classes.icons} />
                                    {/* <img src={messageImg} className={classes.img}/> */}
                                </Grid>
                                <Grid item xs={12} sm={10}>
                                    <Typography className={classes.textIcons}>
                                          We have a 24/7 reliable customer service that will help and assist you with your charchar.
                                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </Typography>
                                </Grid>
                             </Grid>
                        </Grid>
                        <Grid item xs={6}>                        </Grid>

                        
                        <Grid item xs={6}>3</Grid>
                        <Grid item xs={6}>4</Grid>

                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.gallery}>
                        <Grid container>
                           <Grid item xs={12} sm={6}>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                {/* <Gallery/> */}
                            </Grid> 
                        </Grid>
                    </div>    
                </Grid>
                <Grid item xs={12}>
                        <Footer/>   
                </Grid>   
            </Grid>
        </div>
    )
}

export default Home