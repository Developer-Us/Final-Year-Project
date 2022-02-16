import React from 'react';
import LeftBar from './LeftBar';
import Navbar from './Navbar';
import VedioContainer from './VedioContainer';
import Login from './Login'
import SignUp from './SignUp';
// Vedio container made by Yadhnesh...
export default function Home() {
  return (
    <>
      <Navbar/>
      <LeftBar/>
      <VedioContainer/>
      <Login/>
      <SignUp/>
    </>
  );
}
