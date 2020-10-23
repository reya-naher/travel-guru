import React, { useState } from 'react';
import './Login.css';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation, Link } from 'react-router-dom';
import { current, initializeLoginFramework, handleGoogleSignIn, handleFbSignIn, createUserWithEmailAndPassword } from '../Login/LoginManager';
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function CreateUser() {
  const [newUser, setNewUser] = useState(true);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });

  initializeLoginFramework();

  const { setLoggedInUser } = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  // useEffect(() => {
  //   current()
  // }, [])

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
          console.log(res)
          handleResponse(res, true);

        })
    }

    e.preventDefault();
  }
  return (
    <>
      <Header></Header>
      <div style={{ textAlign: 'center' }}>
        <br></br>
        {/* show form */}
        <form onSubmit={handleSubmit} className="form-design">
          <label
            className="form-headline">
            Create An Account
            </label>
          <br></br>
          <input
            name="name"
            className="input-text"
            type="text"
            onBlur={handleBlur}
            placeholder="FirstName" />
          <br />
          <input
            name="name"
            className="input-text"
            type="text"
            onBlur={handleBlur}
            placeholder="LastName" />
          <br></br>
          <input
            type="text"
            className="input-text"
            name="email"
            onBlur={handleBlur}
            placeholder="Your Email address"
            required />
          <br />
          <input
            className="input-text"
            type="password"
            name="password"
            onBlur={handleBlur}
            placeholder="Your Password"
            required />
          <br />
          <input
            className="input-text"
            type="password"
            name="confirm"
            onBlur={handleBlur}
            placeholder="Confirm Password"
            required />
          <br />
          <button
            className="submit-btn"
            type="submit">
            Sign Up
            </button>
        </form>
        <span>
          Already Have an account?
          <Link
            style={{ color: "#FFBD33" }}
            to="/userlogin">
            Login
            </Link>
        </span>
        <p
          style={{ color: 'red' }}>
          {user.error}
        </p>
        <h5
          className="horizontal-text">
          <span>OR</span>
        </h5>
        <button
          className="another-sign-btn"
          onClick={googleSignIn}>
          <FontAwesomeIcon
            className="brand-icon"
            icon={faGoogle} />
            Continue With Google
        </button>

        <br />
        <button
          className="another-sign-btn"
          onClick={fbSignIn}>
          <FontAwesomeIcon
            className="brand-icon"
            icon={faFacebook} />
            Continue With Facebook
        </button>
      </div>
    </>
  );
}

export default CreateUser;

