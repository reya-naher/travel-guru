import React, { useState } from 'react';
import './Home.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { Grid } from '@material-ui/core';
import fakeData from '../../FakeData/FakePlace';

const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: "#FFBD33",
    margin: "20px"
  },
  root: {
    float: "left",
    margin: "10px",
  },
  text: {
    width: "250px",
    color: "white",
    [theme.breakpoints.up('xs')]: {
      fontSize:"2rem"
    },
  },
  subtitle: {
    [theme.breakpoints.up('xs')]: {
      fontSize:"1rem"
    },
  },
  imageSet: {
    height: 260,
    width: 220,
    borderRadius: "25px"
  }
}));

const Home = () => {
  const classes = useStyles();

  const [place, setPlace] = useState(fakeData[0])

  const handlePlace = (id) => {
    const showPlace = fakeData.find(item => item.id === id)
    setPlace(showPlace)
  }
  return (

    <div className="cover">
      <div className="opacity-set">
        <Header></Header>

        <Grid container
          direction="row"
          justify="space-evenly"
          alignItems="center">
          
          <Grid className={classes.text}>
            {/* show description */}
            <h1>{place.name}</h1>

            <Typography
              className={classes.subtitle}
              variant="h6"
              component="p">
              {place.subtitle}
            </Typography>

            <div>
              <Link to={"/place/" + place.name}>
                <Button
                  variant="contained"
                  className={classes.btn}>
                  Booking
                </Button>
              </Link>
            </div>

          </Grid>
          <Grid>
            {
              fakeData.map((data, index) =>
                <>
                  {/* show card img */}
                  <div key={index} className="card-item">
                    <img
                      className={classes.imageSet}
                      onClick={() => handlePlace(data.id)}
                      src={data.img} alt="" />
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