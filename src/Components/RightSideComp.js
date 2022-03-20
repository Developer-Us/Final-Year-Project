import {useState} from 'react'
import '../Styles/RightSideComp.css'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import FileList from './FileList'

/*......................Start Of component..................*/

const RightSideComp=(props)=>{

/*State Variable Declaration Section*/ 
const [noOfFile,setNoOfFile]=useState(0);
const [filePath,setFilePath]=useState(" ");
const [addFile,setAddFile]=useState([]);
const [formData,setFormData]=useState({
    vedioFile:"",
    title:"",
    descript:"",
    Keywords:"",
    ThumnailName:"",
    NoteFile:""
});
/*Onclick Functions Declaration Section*/

const getFile=()=>{
    try{
var input=document.getElementById('SelectFile');
var fReader=new FileReader();
fReader.readAsDataURL(input.files[0]);
fReader.onloadend=function(e)
{
var vd=document.getElementById('Ved_1');
var source=document.createElement('source');
source.setAttribute('src',e.target.result);
setFilePath(e.target.result);
source.setAttribute('type','video/mp4');
vd.appendChild(source);
//vd.play();
document.getElementById('FormElementContainer0').className="block_Win";
document.getElementById('FormElementContainer1').style.display="flex";
}
}
catch(err)
{
  alert("Please select a file");  
}
console.log(filePath);
}

const getFile1=()=>{
if(formData.Keywords==="" && formData.title==="" && formData.descript===""){
document.getElementById('TitleContainer').className="ErrorMsgEffect";
document.getElementById('DescContainer').className="ErrorMsgEffect";
document.getElementById('KeyContainer').className="ErrorMsgEffect";
}
else if(formData.Keywords==="")
document.getElementById('KeyContainer').className="ErrorMsgEffect";
else if(formData.title==="")
document.getElementById('TitleContainer').className="ErrorMsgEffect";
else if(formData.descript==="")
document.getElementById('DescContainer').className="ErrorMsgEffect";
else{
document.getElementById('FormElementContainer1').style.display='none';
document.getElementById('FormElementContainer2').style.display="flex";
}
}

const removeFromList=(indexOfFile)=>{
setAddFile(()=>{
return(
addFile.filter((currVal,i)=>{
setNoOfFile((prev)=>{
return prev-1
}
);
return i!==indexOfFile; 
})
)
}
)
}

const addToList=()=>{
setNoOfFile((prev)=>{return prev+1});
if(noOfFile>=1)
{
 alert("Sorry !!! You can upload 1 file at a time"); 
 setNoOfFile((prev)=>{return prev-1});  
}else{
setAddFile((prev)=>{
return[
    ...prev,
    noOfFile
]
});
}
}
/*Form Submit Main Logic */
const inputChange=(e)=>{
    setFormData((prev)=>{
    return{
        ...prev,
        [e.target.name]:[e.target.value]
    }
    })
}
const VedioGetUploaded=(e)=>{
e.preventDefault();
if(formData.NoteFile==="" && formData.ThumnailName===""){
document.getElementById('thumNailContainer').className="ErrorMsgEffect";
document.getElementById('Notes').className="ErrorMsgEffect";
}
else if(formData.NoteFile==="")
document.getElementById('Notes').className="ErrorMsgEffect";
else if(formData.ThumnailName==="")
document.getElementById('thumNailContainer').className="ErrorMsgEffect";
else{
console.log(formData.vedioFile+" "+formData.ThumnailName+" "+formData.title+" "+formData.descript+" "+formData.Keywords+" "+formData.NoteFile);
}
}
/*  */
/*<<<<<<<<<<<<<<Start of JSX>>>>>>>>>>>>>>>>>>>>>>>>>*/
if(props.winState===1)
{
return(
<>
{/*Below contain code for Upload and drag and drop section*/}
<form id="FormForUpload" onSubmit={VedioGetUploaded}>

<div id="FormElementContainer0" className="UploadFormContainer">
<div id="UploadLogo">
<FileUploadIcon style={{fontSize:"100px",color:"rgb(73, 71, 71,0.37)"}}/>
</div>
<div id="InfoDragDrop">
<p>Drag and Drop file here <b>OR</b></p>
<div className="FileDialogue"><input type="file" id="SelectFile" name="vedioFile" onChange={inputChange} value={formData.vedioFile}/></div>
</div>
<span id="btnContinue" onClick={getFile}><b class="B_TagForLabel">Continue</b></span>
</div>

{/*Below  contain code for add title , description and keywords for vedio*/}
<div id="FormElementContainer1">
<video  id="Ved_1" width="320" height="240" controls>
</video>
<div id="TitleContainer" className="FormElement" >
<label htmlFor="title" className="LabelForInputs"><b >Title</b>(Title should be appropriate to the content )</label>
<input type="text" id="title" class="InputProperty" name="title" onChange={inputChange} value={formData.title}/>
</div>
<div id="DescContainer" className="FormElement" >
<label htmlFor="Description" className="LabelForInputs"><b>Description</b></label>
<textarea type="text" id="Description" class="InputProperty" name="descript" rows="50" cols="50" onChange={inputChange} value={formData.descripts}/>
</div>
<div id="KeyContainer" className="FormElement" >
<label htmlFor="Keywords" className="LabelForInputs"><b >Keywords</b></label>
<input type="text" id="keywords" class="InputProperty" name="Keywords" onChange={inputChange} value={formData.Keywords
}/>
</div>
<div class="CenterContinueBtn">
<span id="btnContinue" onClick={getFile1}><b class="B_TagForLabel">Continue</b></span>
</div>
</div>

{/*Below section contain code for adding notes */}
<div id="FormElementContainer2">
<div id="thumNailContainer"  className="FormElement" >
<label htmlFor="thumnail" id="thumnailOfVed"><b>Add Video Thumnail</b></label>
<div style={{marginTop:"20px"}}>
<input type="file" name="ThumnailName" onChange={inputChange} value={formData.ThumnailName}/>
</div>
</div>
<div id="Notes" className="FormElement" >
<div id="AddBtnLabel">
<label htmlFor="notes" id="notesLabel" className="LabelForInputs"><b>Add Your Notes</b></label>
<span onClick={addToList}  id="PlusBtn"><AddCircleOutlineIcon id="PlusBtnForNotes"/></span>
</div>
{addFile.map((val,index)=>{
return(
<>
<FileList indexRet={index} removeFun={removeFromList} onChgFun={inputChange} frmData={formData}/>
</>
)
})}

<div id="UploadBtnContainer" style={{marginTop:"80px"}}>
<button id="UploadBtn"><b>Upload</b></button>
</div>
</div>
</div>

</form>
</>
    );
}
else{
return(
<>
<div>
</div>
</>
);
}

}
export default RightSideComp;