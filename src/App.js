import React, { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Booking from './Components/Booking/Booking';

import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import data from '../src/FakeData/FakePlace';
import BookingDetail from './Components/BookingDetail/BookingDetail';
import Login from './Components/Login/Login'

export const UserContext = createContext()

function App() {
  const [loggedInUser,setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <p>Name: {loggedInUser.name}</p>
      <p>Email: {loggedInUser.email}</p>
    <Router>
        <Header></Header>
      <Switch>
        <Route exact path="/">
        <Home data={data}></Home> 
        </Route>
        <Route path="/place/:name">
        <Booking data={data}></Booking>
          </Route>
          <Route path="/login">
              <Login></Login>
            </Route>
          <PrivateRoute path="/book/:id">
              <BookingDetail></BookingDetail>
            </PrivateRoute>
      </Switch>
      </Router>  
      </UserContext.Provider>

  );
}

export default App;
