import React from 'react'
import '../Styles/VideoWatchSection.css';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ReplyIcon from '@mui/icons-material/Reply';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ReportIcon from '@mui/icons-material/Report';
import { useEffect } from 'react';

export default function VideoWatchSection() {
  useEffect(() => {
    document.getElementById("LeftBar").className = "ToggleLeftBarInside";
    document.getElementById("RightSideSection").style.position = "static";
    document.getElementById("RightSideSection").style.width = "100%";
    document.getElementById("RightSideSection").className = "ToggleVideoSectionToLeft";
  })
  

  //Functions for handling hover effect for like, share ...btns
  const DisplayLikeText = ()=>{
    document.getElementById("likeBtnText").style.display="block";
  }
  const HideLikeText = ()=>{
    document.getElementById("likeBtnText").style.display="none";
  }

  const DisplayShareText = ()=>{
    document.getElementById("shareBtnText").style.display="block";
  }
  const HideShareText = ()=>{
    document.getElementById("shareBtnText").style.display="none";
  }

  const DisplayWatchLaterText = ()=>{
    document.getElementById("wlBtnText").style.display="block";
  }
  const HideWatchLaterText= ()=>{
    document.getElementById("wlBtnText").style.display="none";
  }

  const DisplayReportText = ()=>{
    document.getElementById("reportBtnText").style.display="block";
  }
  const HideReportText= ()=>{
    document.getElementById("reportBtnText").style.display="none";
  }
  return (
    <div id="RightSideSection" className="VideoWatchSection">
      <div className='VideoPlaySection'>
        <div className="VideoPlayer">
          <div className="Video">
            <video className="VideoTag" src="Sample Video/sampleVideo.mov" type="video/mp4" controls>
            </video>
          </div>

          <div className='VideoMetaData'>
            <div className="VideoTitle">
              Piyush Bansal's Lenskart's Journey - Shark Tank India | Madhukrishna Nipankar overtook piyush | Yadhnesh starts laughing
            </div>
            
            <div className="LikeShareWatchLaterReportBtns">
              <span style={{ display: "flex", flexDirection: "column" }}><ThumbUpAltIcon onMouseEnter={DisplayLikeText} onMouseLeave={HideLikeText} className="VideoMetaBtn" style={{ height: "35px", width: "35px", margin: "5px 10px" }} /><p id="likeBtnText">Like</p></span>
              <span style={{ display: "flex", flexDirection: "column" }}><ReplyIcon onMouseEnter={DisplayShareText} onMouseLeave={HideShareText} className="VideoMetaBtn" style={{ height: "35px", width: "35px", margin: "5px 10px" }} /><p id="shareBtnText">Share</p></span>
              <span style={{ display: "flex", flexDirection: "column" }}><WatchLaterIcon onMouseEnter={DisplayWatchLaterText} onMouseLeave={HideWatchLaterText} className="VideoMetaBtn" style={{ height: "35px", width: "35px", margin: "5px 10px" }} /> <p id="wlBtnText">watch later</p></span>
              <span style={{ display: "flex", flexDirection: "column" }}><ReportIcon onMouseEnter={DisplayReportText} onMouseLeave={HideReportText} className="VideoMetaBtn" style={{ height: "35px", width: "35px", margin: "5px 10px" }} /><p id="reportBtnText">Report</p></span>
            </div>
          </div>

          <div className="ChannelInfo">
              <div className="ChannelPic"><img src="Images/lenskart.jpg"  style={{borderRadius:"50%"}} height="50px" width="50px" alt=".." /></div>
              <div className="ChannelName">Lenskart</div>
          </div>
        </div>

        <div className="QuizSection">
          Quiz Section
        </div>
      </div>
    </div>
  )
}
