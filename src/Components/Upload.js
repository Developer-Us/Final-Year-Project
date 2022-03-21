import '../Styles/Upload.css'
import {useState} from 'react'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import RightSideComp from './RightSideComp';
import { useEffect } from 'react';

const Upload=()=>{
    useEffect(() => {
        document.getElementById("LeftBar").className = "ToggleLeftBarInside";
        document.getElementById("RightSideSection").style.position = "static";
        document.getElementById("RightSideSection").style.width = "100%";
        document.getElementById("RightSideSection").className = "ToggleVideoSectionToLeft";
      })

const [windowChang,setWin]=useState(1);
const startUpload_1=()=>{
    document.getElementById("optionNo_1").className = "OnStartApplyOnLeftPanel_1";
    document.getElementById("optionNo_2").className = "OptionUpload";
    setWin(1);
}
const startUpload_2=()=>{
     document.getElementById("optionNo_1").className = "OptionUpload";
    document.getElementById("optionNo_2").className = "OnStartApplyOnLeftPanel_2";
    setWin(2);
}
    return(
        <div id="RightSideSection">
        <div id="TopLevelContainer">
        <div id="LeftSidePanel">
        <h1 id="TitleUpload" align="center">Upload</h1>
        <ul id="LeftPanelOptions">
        <li id="optionNo_1" className="OnStartApplyOnLeftPanel_1" onClick={startUpload_1}><span class="OptionLogo"><FileUploadIcon/></span><b class="OptionName">Video Upload</b></li>
        <li id="optionNo_2" className="OptionUpload" onClick={startUpload_2}><span class="OptionLogo"><OndemandVideoIcon/></span><b class="OptionName">Your videos</b></li>
        </ul>
        </div>
        <div id="RightSidePanel">
        <RightSideComp winState={windowChang}/>
        </div>
        </div>
        </div>
    )
}
export default Upload