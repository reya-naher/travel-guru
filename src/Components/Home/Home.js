import React, { useEffect, useState } from 'react';
import './Home.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { Divider, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  btn: {
    backgroundColor: "#FFBD33",
margin:"20px"
  },
  root: {
    float: "left",
    margin: "10px",

  },
  text: {
    width: "250px",
    color:"white"
  },
  imageSet: {
    height: 260,
    width: 220,
    borderRadius: "25px"
  }
});

const Home = (props) => {
  const classes = useStyles();
  const fakeData = props.data;

  const [place, setPlace] = useState(fakeData[0])

  const handlePlace = (id) => {
    const showPlace = fakeData.find(item => item.id === id)
    setPlace(showPlace)
  }
  return (

    <div className="cover">
      <div className="opacity-set">
        <Header></Header>
        <Grid   container
  direction="row"
  justify="space-evenly"
  alignItems="center">
          <Grid className={classes.text}>
            <h1>{place.name}</h1>
            <Typography variant="h6" component="p">{place.subtitle}</Typography>
            
          <div>
              
              <Button variant="contained" className={classes.btn}>
              <Link to={"/place/"+place.name}>
                  Booking
                  </Link>
          </Button>
            
          </div>
     </Grid>
          <Grid>
          {
            fakeData.map(data =>
              <>
                <div className="card-item">
                    <img className={classes.imageSet} onClick={() => handlePlace(data.id)}  src={data.img} alt="" />
                  
                </div>
              </>
            )
            }
            </Grid>

        </Grid>
      </div>
    </div>

  );
};

export default Home;