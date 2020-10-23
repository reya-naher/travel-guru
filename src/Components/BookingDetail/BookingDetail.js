import React, { useContext } from 'react';
import './BookingDetail.css';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Header from '../Header/Header';
import hotels from '../../FakeData/FakeHotel';
import Map from './Map';
import { UserContext } from '../../App';

const useStyles = makeStyles((theme) => ({
  root: {
    float: "left",
    marginBottom: "20px"
  },
  media: {
    height: 140,
    width: 250,

  },
  placeName: {
    color:"#FFBD33"
  },
  content: {
    height: 140,
    width: 350,
  },
  mblContainer: {
    paddingLeft:"15px",
    [theme.breakpoints.up('xs')]: {
      marginTop: "10px"
    },
  }
}));

const BookingDetail = () => {
  const { updateOrigin,from,to } = useContext(UserContext);
  const classes = useStyles();
  const { id, name } = useParams()
  const filterData = hotels.filter(item => item.id === id)
  return (

    <Grid container>
      <Header></Header>
      <Grid item md={6} xs={12} className={classes.mblContainer}>
        <p>From <span className={classes.placeName}>{updateOrigin}</span> stays in [{from}]-[{to}]</p>
        <h2> Stays In
          <span className={classes.placeName}>
            {name}
          </span>
        </h2>
        {/* show hotel */}
        {
          filterData.map((data, index) =>
            <Grid item xs={12} key={index}>
              <Grid item xs={6}>
                <Card className={classes.root}>
                  <CardMedia
                    className={classes.media}
                    image={data.img}
                  />
                </Card>
              </Grid>
              <Grid item xs={6} className={classes.root}>
                <Card>
                  <CardContent className={classes.content}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h6">
                      {data.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p">
                      {data.roomDescription}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p">
                      {data.roomFeature}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p">
                      {data.option}
                    </Typography>
                    <Grid
                      justify="space-between"
                      container
                      spacing={10}
                    >
                      <Grid item>
                        <Typography variant="body2" color="textSecondary" component="p">
                          <StarIcon></StarIcon>
                          <StarIcon></StarIcon>
                          <StarIcon></StarIcon>
                          <StarIcon></StarIcon>
                          <StarHalfIcon></StarHalfIcon>
                          {data.rating}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Rate:<AttachMoneyIcon></AttachMoneyIcon>{data.price}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>)
        }
      </Grid>
      <Grid item xs={12} md={6}>
        <Map name={name}></Map>
      </Grid>
    </Grid>
  );
};

export default BookingDetail;