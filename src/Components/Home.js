import React from 'react';
import LeftBar from './LeftBar';
import Navbar from './Navbar';
import VedioContainer from './VedioContainer';
import Login from './Login'
import VideoWatchSection from './VideoWatchSection';
import SignUp from './SignUp'
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
