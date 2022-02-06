import React from 'react';
import '../Styles/Navbar.css';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function Navbar() {
    const HandleMenuIcon = () => {
        if (document.getElementById("LeftBar").className !== "ToggleLeftBarInside") {
            document.getElementById("LeftBar").className = "ToggleLeftBarInside";
            document.getElementById("MainVedioContainer").style.position = "static";
            document.getElementById("MainVedioContainer").style.width = "100%";
            document.getElementById("MainVedioContainer").className = "ToggleVideoSectionToLeft";
        }
        else {
            document.getElementById("LeftBar").className = "ToggleLeftBarOutside";
            document.getElementById("MainVedioContainer").style.position = "absolute";
            document.getElementById("MainVedioContainer").style.right = "0";
            document.getElementById("MainVedioContainer").style.width = "85%";
            document.getElementById("MainVedioContainer").className = "ToggleVideoSectionToRight";
        }
    }
    return <div id="Navbar">
        <span onClick={HandleMenuIcon} id="MenuIcon">
            <MenuSharpIcon style={{ height: "35px", width: "35px" }} />
        </span>
        <a href="/" id="Logo">
            <img src="Logo/Youtube-Logo.png" height="37px" width="37px" alt="loading..." />
            <span id="Youtube-Logo-Text">YouTube</span>
        </a>
        <div id="Theme">
            <DarkModeIcon style={{ height: "37px", width: "37px" }} />
        </div>
        <div id="AccountIcon">
            <AccountCircleIcon style={{ height: "37px", width: "37px" }} />
        </div>
    </div>;
}

