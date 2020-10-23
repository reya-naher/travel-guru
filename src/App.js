import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Booking from './Components/Booking/Booking';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import BookingDetail from './Components/BookingDetail/BookingDetail';
import Login from './Components/Login/Login';
import NoMatch from './Components/NoMatch/NoMatch';
import CreateUser from './Components/Login/CreateUser';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  const [updateOrigin, setUpdateOrigin] = useState('')
  const [from, setFrom] = useState(null)
  const [to, setTo] = useState(null)
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser,updateOrigin,setUpdateOrigin,from, setFrom, to, setTo}}>  
      <Router> 
      <Switch> 
        <Route path="/place/:name">
        <Booking></Booking>
          </Route>
          <Route path="/createuser">
            <CreateUser></CreateUser>
          </Route>
          <Route path="/userlogin">
            <Login></Login>
            </Route>
          <PrivateRoute path="/book/:name/:id">
              <BookingDetail></BookingDetail>
          </PrivateRoute>
          <Route exact path="/">  
        <Home></Home> 
        </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
      </Switch>
      </Router>  
      </UserContext.Provider>

  );
}

export default App;
