import React from 'react';
import '../Styles/LeftBar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';



export default function LeftBar() {
  useEffect(() => {
    let windowWidth = window.matchMedia("(min-width: 852px)");
    if (windowWidth.matches) {
      document.getElementById("RightSideSection").style.position = "absolute";
      document.getElementById("RightSideSection").style.right = "0";
      document.getElementById("RightSideSection").style.width = "85%";
      document.getElementById("RightSideSection").className = "ToggleVideoSectionToRight";
      document.getElementById("LeftBar").className = "ToggleLeftBarOutside";
    }
    else {
      document.getElementById("LeftBar").className = "ToggleLeftBarInside";
      document.getElementById("RightSideSection").style.position = "static";
      document.getElementById("RightSideSection").style.width = "100%";
      document.getElementById("RightSideSection").className = "ToggleVideoSectionToLeft";
    }
  });


  return <div id="LeftBar" className="ToggleLeftBarInside">
    <Link to="/" style={{textDecoration:"none",color:"black"}}>
      <div className="Option active">
        <div className='OptionIcon'><HomeIcon /></div>
        <div className="OptionName">Home</div>
      </div>
    </Link>

    {/* login & signup menu  */}
    <div id="LoginSignup">
      <div id="userIcon"><AccountCircleIcon style={{ height: "65px", width: "41px" }} /></div>
      <div id="LoginSignupBtns">
        <div id="Login"><Link className="anchor-style" to="login">Login</Link></div>
        <div id="Signup"><Link className="anchor-style" to="/signUp">Signup</Link></div>
      </div>
    </div>
  </div>;
}
