import React from 'react';
import '../Styles/LeftBar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';


export default function LeftBar() {
  return <div id="LeftBar" className="ToggleLeftBarOutside">
    <div className="Option active">
      <div className='OptionIcon'><HomeIcon /></div>
      <div className="OptionName">Home</div>
    </div>

    {/* login & signup menu  */}
    <div id="LoginSignup">
      <div id="userIcon"><AccountCircleIcon style={{ height: "65px", width: "41px" }} /></div>
      <div id="LoginSignupBtns">
        <div id="Login"><a className="anchor-style" href="Login">Login</a></div>
        <div id="Signup"><a className="anchor-style" href="Signup">Signup</a></div>
      </div>
    </div>
  </div>;
}
