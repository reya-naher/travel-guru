import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid, Paper, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import './Booking.css';
import fakeData from '../../FakeData/FakePlace';
import { UserContext } from '../../App';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  text: {
    color: "white"
  },
  header: {
    marginLeft: "20%",
    fontWeight: "bold",
    [theme.breakpoints.down('xs')]: {
      marginLeft: "10%",
      fontSize:"40px"
    },
  },
  paragraph: {
    marginLeft: "80px",
    [theme.breakpoints.down('xs')]: {
      padding: "5px",
      marginLeft: "0px",
      fontSize:"15px"
    },
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
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

const Booking = () => {
  const {setUpdateOrigin,setFrom, setTo}  = useContext(UserContext);
  const classes = useStyles();
  const { name } = useParams()
  const findData = fakeData.find(item => item.name === name)
  const history = useHistory()

  const handleOnblur = (e)=>{
    setUpdateOrigin(e.target.value)
  }
  const handleOnblurFrom = (e)=>{
    setFrom(e.target.value)
  }
  const handleOnblurTo = (e)=>{
    setTo(e.target.value)
  }

  const handleBook = (id) => {
    history.push(`/book/${name}/${id}`);
  }

  return (
    <>
      <div className="cover-booking">
        <div className="opacitySet-booking">
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
                <Typography
                  className={classes.header}
                  gutterBottom
                  variant="h2">
                  {findData.name}
                </Typography>
                <Typography
                  className={classes.paragraph}
                  gutterBottom
                  variant="h6"
                  component="p">
                  {findData.description}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                {/* show form */}
                <Paper className={classes.paper}>
                  <form onSubmit={() => handleBook(findData.id)}>
                    <label htmlFor="fname">Origin</label>
                    <br></br>
                    <input
                      onBlur={handleOnblur}
                      type="text"
                      name="origin"
                      placeholder="Origin"
                      required />
                    <br></br>
                    <label htmlFor="fname">Destination</label>
                    <br></br>
                    <input
                      type="text"
                      name="email"
                      placeholder={findData.name}
                      disabled />
                    <br />
                    <br />
                    <Grid
                      container
                      justify="space-around">
                      <div className={classes.container} noValidate>
                        <TextField
                          onBlur={handleOnblurFrom}
                          required={true}
                          id="date"
                          label="From"
                          type="date"
                          helperText="Please select Date"
                          defaultValue={new Date().toISOString().slice(0,10)}
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </div>
                      <div className={classes.container} noValidate>
                        <TextField
                          onBlur={handleOnblurTo}
                          required={true}
                          id="date"
                          label="To"
                          type="date"
                          helperText="Please select Date"
                          defaultValue={new Date().toISOString().slice(0,10)}
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </div>
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