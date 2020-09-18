import React, { useState, useEffect } from 'react';
import './Login.css';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { current, initializeLoginFramework, handleGoogleSignIn, handleSignOut, handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../Login/LoginManager';
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });

  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  useEffect(() => {
    current()
  }, [])

  const googleSignIn = () => {
    handleGoogleSignIn()
      .then(res => {
        handleResponse(res, true);
      })
  }
  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  }

  const fbSignIn = () => {
    handleFbSignIn()
      .then(res => {
        handleResponse(res, true);
      })

  }

  const signOut = () => {
    handleSignOut()
      .then(res => {
        handleResponse(res, false);
      })
  }

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password)
        .then(res => {
          handleResponse(res, true);
        })
    }

    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          handleResponse(res, true);
        })
    }
    e.preventDefault();
  }

  return (
    <>
      <Header></Header>
      <div style={{ textAlign: 'center' }}>
        <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
        <label className="checkbox-style" htmlFor="newUser">Don't Have An Account? Click Here...</label>
        <br></br>  

        {newUser ? <form onSubmit={handleSubmit} class="form-design">
          <label className="form-headline">{newUser ? "Create an account" : "Login"}</label>
          <br />
          <input placeholder="FirstName" className="input-text" name="firstname" id="fname" type="text" onBlur={handleBlur} />
          <br />
          <input placeholder="SecondName"  className="input-text" name="secondname" id="fname" type="text" onBlur={handleBlur} />
          <br />
          <input className="input-text" type="text" name="email" onBlur={handleBlur} placeholder="Email address" required />
          <br />
          <input className="input-text" type="password" name="password" onBlur={handleBlur} placeholder="Password" required />
          <br />
          <input className="input-text" type="password" name="password" onBlur={handleBlur} placeholder="Confirm Password" required />
          <br />
          <button className="submit-btn" type="submit">{newUser ? 'Sign up' : 'Sign in'}</button>
         
        </form> :
          <form onSubmit={handleSubmit} class="form-design">
            <label className="form-headline">{newUser ? "Create an account" : "Login"}</label>
            <br />
            <input className="input-text" type="text" name="email" onBlur={handleBlur} placeholder="Email address" required />
            <br />
            <input className="input-text" type="password" name="password" onBlur={handleBlur} placeholder="Password" required />
            <br />
            <button className="submit-btn" type="submit">{newUser ? 'Sign up' : 'Sign in'}</button>
          </form>
        }

<p style={{ color: 'red' }}>{user.error}</p>
        {user.success && <p style={{ color: 'green' }}>User {newUser ? 'created' : 'Logged In'} successfully</p>}

        <h5 className="horizontal-text"><span>OR</span></h5>
        <button className="another-sign-btn" onClick={googleSignIn}>
        <FontAwesomeIcon className="brand-icon" icon={faGoogle} />Continue With Google</button>
        
        <br />
        <button className="another-sign-btn" onClick={fbSignIn}><FontAwesomeIcon className="brand-icon" icon={faFacebook} />Continue With Facebook</button>
        {
          user.isSignedIn && <div>
            <p>Welcome, {user.name}!</p>
            <p>Your email: {user.email}</p>
            <img src={user.photo} alt="" />
          </div>
        }
      </div>
    </>
  );
}

export default Login;




