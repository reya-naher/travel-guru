import 'date-fns';
import React from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, TextField, Button } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin:"20px"
  },
}));

const Booking = (params) => {
  const classes = useStyles();
  const { name } = useParams()
  const findData = params.data.find(item => item.name === name)
  console.log(findData)

  const history = useHistory()
    const handleBook = (id) => {
        history.push(`/book/${id}`);
    }

  const [selectedDate, setSelectedDate] = React.useState(new Date('2020-09-17T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className={classes.root}>
<Grid
  container
  direction="row"
  justify="space-evenly"
  alignItems="center"
      >
          <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <Typography gutterBottom variant="h5" component="h2">
              {findData.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="p">
              {findData.description}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <TextField id="outlined-basic" label="Origin" variant="outlined" />
            <br />
            <TextField id="outlined-basic" label="Destination" variant="outlined" />
            <br />

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="From"
          format="MM/dd/yy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
                />
                        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="To"
          format="MM/dd/yy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
            </MuiPickersUtilsProvider>
            <Button onClick={() => handleBook(findData.id)} variant="contained" color="secondary"> Start Booking </Button>
    </Paper>
        </Grid>
      </Grid>
      </div>
  );
};

export default Booking;