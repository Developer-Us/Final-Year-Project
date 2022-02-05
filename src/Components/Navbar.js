import React from 'react';
import '../Styles/Navbar.css';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Navbar() {
    const HandleMenuIcon = () => {
        if (document.getElementById("LeftBar").className !== "ToggleLeftBarInside") {
            document.getElementById("LeftBar").className = "ToggleLeftBarInside";
        }
        else {
            document.getElementById("LeftBar").className = "ToggleLeftBarOutside";
        }
    }
    return <div id="Navbar">
        <span onClick={HandleMenuIcon} id="MenuIcon">
            <MenuSharpIcon style={{ height: "35px", width: "35px" }} />
        </span>
        <div id="Logo">
            <img src="Logo/Youtube-Logo.png" height="37px" width="37px" alt="loading..." />
            <span id="Youtube-Logo-Text">YouTube</span>
        </div>
        <div id="AccountIcon">
        <AccountCircleIcon style={{height:"37px",width:"37px"}}/>
        </div>
    </div>;
}

