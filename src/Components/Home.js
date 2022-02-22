import React from 'react';
import LeftBar from './LeftBar';
import Navbar from './Navbar';
import VedioContainer from './VedioContainer';
import Login from './Login'
import SignUp from './SignUp'
import VideoWatchSection from './VideoWatchSection';
export default function Home() {
  return (
    <>
      <Navbar />
      <LeftBar />
      <VedioContainer />
      <Login />
      <SignUp />
      <VideoWatchSection />
     
      
    </>
  );
}
