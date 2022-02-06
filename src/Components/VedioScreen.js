import '../Styles/VedioScreen.css'
const VedioScreen=()=>{
    return(
        <>
        <div id="VedioDesc">
            <div id="VedioC"><img 
            src="Images/VedioThumnail.jpg" height="152px" width="291px" alt="loading.."/> {/*Add Image here */}
            </div>
            <div id="VedioDetail">
            <span id="logo"><img src="Images/VedioThumnail.jpg" style={{borderRadius:"50%"}}height="40px" width="40px" alt=".." /></span>
            <ul>
            <li><h4 style={{width:"250px",height:"24px",overflow:"hidden"}}>Website making in 40 minutes</h4></li>
            <li>Technical Fande</li>
            <li>45k views . 2 years ago</li>
            </ul>
            </div>
        </div>
        </>
    )
}
export default VedioScreen;
