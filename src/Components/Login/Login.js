import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App'
import { useHistory, useLocation } from 'react-router-dom';
import { Button,TextField, Grid} from '@material-ui/core';

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(res => {
        const { displayName, email } = res.user;
        const signedInUser = {
          name: displayName,
          email: email
        }
        setLoggedInUser(signedInUser);
        history.replace(from);
    }).catch(error => {
      console.log(error)
    });   
  }
  return (
    <Grid
    container
    direction="row"
    justify="space-evenly"
    alignItems="center"
    >
      <Grid item xs={12}>
      <h1>login</h1>
      <TextField id="standard-basic" label="UserName/Email" />
        <br />
        <TextField id="standard-basic" label="Password" />
        <br />
        <Button onClick={googleSignIn} variant="contained" color="secondary">SignIn</Button>
    </Grid>
    </Grid>
    
  );
};

export default Login;