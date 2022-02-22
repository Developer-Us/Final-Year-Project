import React from 'react';
import LeftBar from './LeftBar';
import Navbar from './Navbar';
import VedioContainer from './VedioContainer';
import Login from './Login'
import SignUp from './SignUp'
import VideoWatchSection from './VideoWatchSection';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function Home() {
  return (
    <>

      <Router>
        <Navbar />
        <LeftBar />
        <Switch>
          <Route exact path="/">
            <VedioContainer />
          </Route>

          <Route exact path="/videoWatchSection">
            <VideoWatchSection />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/signUp">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
