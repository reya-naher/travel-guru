import React from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid, Paper, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import './Booking.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  text: {
    color: "white"
  },
  header: {
    marginLeft: "180px",
    fontSize: "80px",
    fontWeight: "bold"
  },
  paragraph: {
    marginLeft: "80px"
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: "20px"
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const Booking = (params) => {
  const classes = useStyles();
  const { name } = useParams()
  const findData = params.data.find(item => item.name === name)
  console.log(findData);

  const history = useHistory()
  const handleBook = (id) => {
    history.push(`/book/${name}/${id}`);
  }

  return (
    <>
      <div className="cover">
        <div className="opacity-set">
          {/* header */}
          <Header></Header>
          <div className={classes.root}>
            {/* show description */}
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
            >
              <Grid item xs={12} sm={6} className={classes.text}>
                <Typography className={classes.header} gutterBottom variant="h4" component="p">
                  {findData.name}
                </Typography>
                <Typography className={classes.paragraph} gutterBottom variant="h6" component="p">
                  {findData.description}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                {/* show form */}
                <Paper className={classes.paper}>
                  <form onSubmit={() => handleBook(findData.id)}>
                    <label for="fname">Origin</label>
                    <br></br>
                    <input className="" type="text" name="email" placeholder="Origin" required />
                    <br></br>
                    <label for="fname">Destination</label>
                    <br></br>
                    <input className="" type="text" name="email" placeholder={findData.name} disabled />
                    <Grid container justify="space-around">
                      <form className={classes.container} noValidate>
                        <TextField
                          id="date"
                          label="From"
                          type="date"
                          defaultValue="2017-05-24"
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </form>
                      <form className={classes.container} noValidate>
                        <TextField
                          id="date"
                          label="To"
                          type="date"
                          defaultValue="2017-05-24"
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </form>
                    </Grid>
                    <button
                      className="booking-btn"
                      type="submit"> Start Booking
                      </button>
                  </form>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;