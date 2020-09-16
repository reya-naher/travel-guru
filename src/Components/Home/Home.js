import React from 'react';
import './Home.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    float: "left",
    margin: "10px"
  },
  media: {
    height: 140,
  },
});



const Home = (params) => {
  const classes = useStyles();

  const fakeData = params.data
  return (
  <div className="container">
    {
      fakeData.map(data =>
        <Card key={data.id} className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={data.img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {data.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
           {data.subtitle}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
            <Link to={"/place/"+data.name}>
            <Button size="small" color="primary">
            Booking
          </Button>
            </Link>
        </CardActions>
      </Card>)
    }
</div>
  );
};

export default Home;