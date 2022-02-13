import React from 'react';
import '../Styles/LeftBar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import { useEffect } from 'react';


export default function LeftBar(){
  useEffect(() => {
    let windowWidth =  window.matchMedia("(min-width: 852px)");
    if(windowWidth.matches){
      document.getElementById("MainVedioContainer").style.position = "absolute";
      document.getElementById("MainVedioContainer").style.right = "0";
      document.getElementById("MainVedioContainer").style.width = "85%";
      document.getElementById("MainVedioContainer").className = "ToggleVideoSectionToRight";
      document.getElementById("LeftBar").className = "ToggleLeftBarOutside";
    }
    else{
      document.getElementById("LeftBar").className = "ToggleLeftBarInside";
      document.getElementById("MainVedioContainer").style.position = "static";
      document.getElementById("MainVedioContainer").style.width = "100%";
      document.getElementById("MainVedioContainer").className = "ToggleVideoSectionToLeft";
    }
  });

  
  return <div id="LeftBar" className="ToggleLeftBarInside">
    <div className="Option active">
      <div className='OptionIcon'><HomeIcon /></div>
      <div className="OptionName">Home</div>
    </div>

    {/* login & signup menu  */}
    <div id="LoginSignup">
      <div id="userIcon"><AccountCircleIcon style={{ height: "65px", width: "41px" }} /></div>
      <div id="LoginSignupBtns">
        <div id="Login"><a className="anchor-style" href="/">Login</a></div>
        <div id="Signup"><a className="anchor-style" href="/">Signup</a></div>
      </div>
    </div>
  </div>;
}
