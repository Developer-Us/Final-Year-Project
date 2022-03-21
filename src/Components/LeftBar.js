import React from 'react';
import '../Styles/LeftBar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HistoryIcon from '@mui/icons-material/History';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import HomeIcon from '@mui/icons-material/Home';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import LoggedInStatusContext from '../Context/LoggedInStatus/LoggedInStatusContext';



export default function LeftBar() {

  const is_loggedin = useContext(LoggedInStatusContext);
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


    if (is_loggedin.loggedin === false){
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
    </div>
    }  
    else{
      return <div id="LeftBar" className="ToggleLeftBarInside">
      <Link to="/" style={{textDecoration:"none",color:"black"}}>
        <div className="Option active">
          <div className='OptionIcon'><HomeIcon /></div>
          <div className="OptionName">Home</div>
        </div>
      </Link>

      <Link to="/" style={{textDecoration:"none",color:"black"}}>
      <div className="Option">
          <div className='OptionIcon'><BookmarkIcon /></div>
          <div className="OptionName">Bookmark</div>
        </div>
        </Link>

        <Link to="/" style={{textDecoration:"none",color:"black"}}>
        <div className="Option">
          <div className='OptionIcon'><HistoryIcon /></div>
          <div className="OptionName">History</div>
        </div>
        </Link>

        <Link to="/uploadVideo" style={{textDecoration:"none",color:"black"}}>
        <div className="Option">
          <div className='OptionIcon'><FileUploadIcon /></div>
          <div className="OptionName">Upload</div>
        </div>
        </Link>
    </div>
    }
   
}
