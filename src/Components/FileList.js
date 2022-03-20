import '../Styles/FileList.css'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
const FileList=(props)=>{
// const updateLocn=()=>{
//     var fname=document.getElementById('file1');
//     var fileName=document.getElementById('fileName');
//     fileName.innerHTML=`<span class=replaceSpan>
//     ${fname.files.item(0).name}
//     ${fname.files.item(0).type}
//     <b>
//     ${fname.files.item(0).size}
//     KB
//     </b>
//     </span>

//     `;
// }
    return(
        <>
        <div id="fileContain">
        <span id="fileName">
        <input type="file" id="file1" class="TakeFileAsInput" name="NoteFile" onChange={props.onChgFun} value={props.frmData.NoteFile}/>
        </span>
       <span id="CancelLogo" onClick={()=>{
        props.removeFun(props.indexRet); 
        }}><HighlightOffIcon id="CancelBtn"/></span>
        </div>
        </>
    )
}
export default FileList;