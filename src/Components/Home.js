import React from 'react';
import LeftBar from './LeftBar';
import Navbar from './Navbar';
import VedioContainer from './VedioContainer';
import Login from './Login'
import VideoWatchSection from './VideoWatchSection';
// Vedio container made by Yadhnesh...
export default function Home() {
  return (
    <>
      <Navbar/>
      {/* <LeftBar/>
      <VedioContainer/>
    <Login/> */}
    <VideoWatchSection/>
    </>
  );
}
