import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper, Button} from '@material-ui/core'
import {makeStyles, createStyles} from "@material-ui/styles"

const useStyles = makeStyles((theme: Theme) => createStyles({
    newscards: {
        width:"100%",
        height:"100%"

    },
    newscardImage:{
        width:"100%",
        height:370,
        backgroundColor:"red"
    },
    carousel:{
        height:"100%",
        width:"100%",
    }
  }));

{/* <img src="https://images.pexels.com/photos/2496880/pexels-photo-2496880.jpeg?cs=srgb&dl=photo-of-person-standing-near-cliff-edge-2496880.jpg&fm=jpg" />
<img src="https://images.pexels.com/photos/846350/pexels-photo-846350.jpeg?cs=srgb&dl=photography-of-mountains-near-body-of-water-846350.jpg&fm=jpg" />
<img src="https://images.pexels.com/photos/2562158/pexels-photo-2562158.jpeg?cs=srgb&dl=white-canoe-and-green-palm-trees-2562158.jpg&fm=jpg" /> */}

const Gallery =()=>{
    const classes = useStyles();
    
    const items = [
        {
            title: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            attachment:"https://scontent.fceb1-1.fna.fbcdn.net/v/t1.0-9/107651656_311562396886884_5800593065089036012_o.jpg?_nc_cat=100&_nc_sid=8bfeb9&_nc_eui2=AeF4ynDmSDjo3tS5n97BCvwhR6my8hfzKutHqbLyF_Mq69JbukIgbg06xgHihepZ6BPeB_iVdED971VFLrnRDyXy&_nc_oc=AQkIH47Ub9nu97vJCtmS4-GixKC-G3_jmWxkGXYGFXW8qGEcKTKRL9K63LMXlGlYgic&_nc_ht=scontent.fceb1-1.fna&oh=7782154390f5d243c16928f3bba0c391&oe=5F32487B"

        },
        {
            title: "Random Name #2",
            description: "Hello World!",
            attachment:"https://images.pexels.com/photos/2562158/pexels-photo-2562158.jpeg?cs=srgb&dl=white-canoe-and-green-palm-trees-2562158.jpg&fm=jpg"
        },
        {
            title: "Random Name #3",
            description: "Hello World!",
            attachment:"https://images.pexels.com/photos/2562158/pexels-photo-2562158.jpeg?cs=srgb&dl=white-canoe-and-green-palm-trees-2562158.jpg&fm=jpg"
        },
        
    ]
    const Item = props =>{
        return(
         <div className={classes.newscards}>
             <div className={classes.newscardImage}>
                <img src={`${props.item.attachment}`} className={classes.newscardImage}/>
             </div>
            {/* <h2>{props.item.name}</h2>
            <p>{props.item.description}</p> */}
         </div>   
        )
    }
    return(
        <Carousel
        className={classes.carousel}
        animation="fade"
        >
            {
                items.map( item => <Item item={item} /> )
            }
        </Carousel>
    )
}

export default Gallery
