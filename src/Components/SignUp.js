import '../Styles/SignUp.css';
import React, { useEffect } from 'react'
import AddAPhotoRoundedIcon from '@mui/icons-material/AddAPhotoRounded';


export default function SignUp() {
  useEffect(() => {
    document.getElementById("body").style.overflow = "scroll";
  })
  return (
    <>
    <div className='signup'>
        <form id="form">
          <div id="circle">
          <span id="profile_logo">
            <img src="Logo/profile.png" height="100px" width="100px" alt="loading..." />
          </span>
          </div>
            
          <div id="smallcircle">
            <AddAPhotoRoundedIcon/>
          </div>
            <h2 id='h2'>Sign Up</h2>
            <p id='p'>
              <label htmlFor="Firstname" className="floatLabel">First Name</label>
              <input id="F_Name" name="firstName" type="text"/>
            </p>
            <p id='p'>
              <label htmlFor="Lastname" className="floatLabel">Last Name</label>
              <input id="L_Name" name="lastName" type="text"/>
            </p>
            <p id='p'>
              <label htmlFor="Username" className="floatLabel">Username</label>
			        <input id="U_Name" name="username" type="text"/>
            </p>
		    <p id='p'>
			    <label htmlFor="Email" className="floatLabel">Email</label>
			    <input id="Email" name="email" type="text"/>
		    </p>
		    <p id='p'>
			    <label htmlFor="password" className="floatLabel">Password</label>
			    <input id="password" name="password" type="password"/>
			    {/* <span id="error_msg">Enter a password longer than 8 characters</span> */}
		    </p>
		    <p id='p'>
			    <label htmlFor="confirm_password" className="floatLabel">Confirm Password</label>
			    <input id="confirm_password" name="confirm_password" type="password"/>
			    {/* <span id="error_msg">Your passwords do not match</span> */}
		    </p>
		    <p id='p'>
			    <input type="button" value="Create My Account" id="submit"/>
		    </p>
            <p id='p'>
            <button id='text'>
            Sign in with Google
            </button>
            </p>
            <p id='p'>
                <span>Already have an account?Login</span>
            </p>
	    </form>
    </div>
    </>
  )
}
