import React from "react"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
// import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"
// import CardMedia from "@material-ui/core/CardMedia"
import {makeStyles, createStyles} from "@material-ui/styles"
import Background from "./assets/aerial-background.jpg"
import Hotel from "./assets/hotel.jpg";
import Traveller from "./assets/traveller.jpg";
import Plane from "./assets/plane.png";
// import messageImg from "./assets/hello.png"
import Header from "../Header"
// import Newsbites from "./components/Newsbites"
import Footer from "../Footer"
// import Gallery from "../Gallery"
// import PermPhoneMsgRoundedIcon from '@material-ui/icons/PermPhoneMsgRounded';
import HeadsetMicTwoToneIcon from '@material-ui/icons/HeadsetMicTwoTone';
import CardTravelTwoToneIcon from '@material-ui/icons/CardTravelTwoTone';
import CreditCardTwoToneIcon from '@material-ui/icons/CreditCardTwoTone';
import EmojiEmotionsTwoToneIcon from '@material-ui/icons/EmojiEmotionsTwoTone';
import Services from './Services'

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
  midSection1:{
      height: "auto",
      width:"100%",
      backgroundColor:"#046789",
      padding:50
  },
  midSection2:{
    height: "auto",
    width:"100%",
    backgroundColor:"white",
    padding:50
},
service1:{
    width: 151,
},
service2:{
    paddingTop:"55px",
    width: 151,
},
service3:{
    paddingTop:"50px",
    width: 151,
},
  mainPanel:{
    //   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  gallery:{
    width:"100%",
    height:400,
    backgroundColor:"#DB9B00"
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
      marginTop:30,
      fontSize:70,
      color: "#DB9B00"
  },
  textIcons:{
     marginTop:45, 
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
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={12}>
                            <div style={{height:20, width:"100%", backgroundColor:"#DB9B00"}}></div>
                                {/* <Typography className={classes.panelTitle}> Why Book with Us?  </Typography> */}
                        </Grid>
                        <Grid item xs={6}  className={classes.midSection1}>
                        <Grid container spacing={0}>
                                <Grid item xs={12} sm={6}>
                                    <Grid container spacing={1}>
                                    <Grid item xs={12} sm={3}>
                                    <HeadsetMicTwoToneIcon className={classes.icons} />
                                    {/* <img src={messageImg} className={classes.img}/> */}
                                    </Grid>
                                    <Grid item xs={12} sm={9}>
                                        <Typography className={classes.textIcons}>
                                            We have a 24/7 reliable customer service that will help and assist you with the best travel package there is in the market
                                        </Typography>
                                    </Grid>
                                    </Grid>

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Grid container spacing={1}>
                                    <Grid item xs={12} sm={3}>
                                    <CardTravelTwoToneIcon className={classes.icons} />
                                    {/* <img src={messageImg} className={classes.img}/> */}
                                    </Grid>
                                    <Grid item xs={12} sm={9}>
                                        <Typography className={classes.textIcons}>
                                            We provide the best domestic and international travel products and services at the most reasonable price
                                        </Typography>
                                    </Grid>
                                    </Grid>    
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Grid container spacing={1}>
                                    <Grid item xs={12} sm={3}>
                                    <CreditCardTwoToneIcon className={classes.icons} />
                                    {/* <img src={messageImg} className={classes.img}/> */}
                                    </Grid>
                                    <Grid item xs={12} sm={9}>
                                        <Typography className={classes.textIcons}>
                                            We have secure payments via different local and international payment processing- GCash, paypal, etc.
                                        </Typography>
                                    </Grid>
                                    </Grid>

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Grid container spacing={1}>
                                    <Grid item xs={12} sm={3}>
                                    <EmojiEmotionsTwoToneIcon className={classes.icons} />
                                    {/* <img src={messageImg} className={classes.img}/> */}
                                    </Grid>
                                    <Grid item xs={12} sm={9}>
                                        <Typography className={classes.textIcons}>
                                            We are a happy team and we want you to get the best travel you could ever have to live life to the fullest.
                                        </Typography>
                                    </Grid>
                                    </Grid>

                                </Grid>
                             </Grid>
                        </Grid>
                        <Grid item xs={6} className={classes.midSection2}>
                                <Grid container spacing={1}>
                                <Grid item xs={12} style={{fontStyle:"bold", fontSize:30, color:"#046789"}}>
                                    Services Offered
                                </Grid>

                                    <Grid item xs={12} sm={4}>
                                        <Services name="Hotel Booking" class_name={classes.service1} image={Hotel}/>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Services name="Air Plane Ticketing" class_name={classes.service2} image={Plane} />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Services name="Holiday Tour" class_name={classes.service3} image={Traveller} />
                                    </Grid>
                                </Grid>
                        </Grid>
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