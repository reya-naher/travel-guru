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

import data from '../src/FakeData/FakePlace';
// export const PlaceContext = createContext()

function App() {
  const [loggedInUser,setLoggedInUser] = useState({})
  return (
    // <PlaceContext.provider value={[loggedInUser,setLoggedInUser]}>
    //   <Header></Header>
    //   <Home></Home>
    // </PlaceContext.provider>
    <Router>
        <Header></Header>
      <Switch>
        <Route exact path="/">
        <Home data={data}></Home> 
        </Route>
        <Route path="/place/:name">
        <Booking data={data}></Booking>
        </Route>
      </Switch>
    

        </Router>  

  );
}

export default App;
