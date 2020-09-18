import React from 'react';
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
import Map from './Map';

const useStyles = makeStyles((theme) => ({
  root: {
    float: "left",
    marginBottom: "20px"
  },
  media: {
    height: 140,
    width: 250,

  },
  content: {
    height: 140,
    width: 350,
  }
}));

const BookingDetail = (props) => {
  const classes = useStyles();
  const { id, name } = useParams()
  const hotels = props.hotel
  const filterData = hotels.filter(item => item.id === id)
  console.log(filterData)
  return (

    <Grid container>
      <Header></Header>
      <Grid item xs={6}>
        <p>stays in 13-14April 3 guests</p>
        <h1>Stays In {name}</h1>
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
                    <Typography gutterBottom variant="h6" component="h6">
                      {data.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {data.roomDescription}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {data.roomFeature}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {data.option}
                    </Typography>
                    <Grid
                      justify="space-between"
                      container
                      spacing={24}
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
      <Grid item xs={6}>
        {/* show map */}
        <Map></Map>
      </Grid>
    </Grid>
  );
};

export default BookingDetail;