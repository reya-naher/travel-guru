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
import Login from './Components/Login/Login';
import hotel from './FakeData/FakeHotel'
import NoMatch from './Components/NoMatch/NoMatch';

export const UserContext = createContext()

function App() {
  const [loggedInUser,setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <p>Email:{loggedInUser.email}</p>  */}
      
      <Router> 
      {/* <Header></Header> */}
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
          <PrivateRoute path="/book/:name/:id">
              <BookingDetail hotel={hotel}></BookingDetail>
          </PrivateRoute>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
      </Switch>
      </Router>  
      </UserContext.Provider>

  );
}

export default App;
