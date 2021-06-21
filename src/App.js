import React, {Component, Fragment} from 'react';
import Navbar from './Component/Navbar';
import Carousel from './Component/Carousel';
import Content from './Component/Content';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Booking from './Component/Menu/Booking';
import Queue from './Component/Menu/Queue';
import History from './Component/Menu/History';
import Schedule from './Component/Menu/Schedule';
import InfoBed from './Component/Menu/InfoBed';
import InfoBed1 from './Component/Menu/Infobed1';
import News from './Component/Menu/News';
import Contact from './Component/Menu/Contact';
import GlobalProvider from './Context';
// import Test from './Test';
import Artikel from './Component/Artikel';
import Maps from './Maps/index.jsx';

class App extends Component{

  render(){
    return(
      <Fragment>
        <Router>
          <Switch>
            <Route exact path="/">
              <Navbar />
              <Carousel />
              <Content />
            </Route>
            <Route path="/booking">
              <Booking />
            </Route>
            <Route path="/queue">
              <Queue />
            </Route>
            <Route path="/history">
              <History />
            </Route>
            <Route path="/schedule">
              <Schedule />
            </Route>
            <Route path="/info-bed">
              <InfoBed />
            </Route>
            <Route path="/info-bed-v2">
              <InfoBed1 />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/profile">
              Profile
            </Route>
            <Route path="/payment">
              Payment
            </Route>
            <Route path="/logout">
              Logout
            </Route>
            <Route path="/artikel/:news_id" component={Artikel} />
            <Route path="/test">
              <Maps />
            </Route>
          </Switch>
        </Router>

      </Fragment>
    )
  }
}

export default GlobalProvider(App);
