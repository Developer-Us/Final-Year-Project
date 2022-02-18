import '../Styles/SignUp.css';
import React from 'react'

export default function SignUp() {
  return (
    <>
    <div className='signup' style={{display:"none"}}>
        <form>
            <h2>Sign Up</h2>
            <p>
                <label htmlFor="Username" className="floatLabel">Username</label>
			    <input id="U_Name" name="Username" type="text"/>
            </p>
		    <p>
			    <label htmlFor="Email" className="floatLabel">Email</label>
			    <input id="Email" name="Email" type="text"/>
		    </p>
		    <p>
			    <label htmlFor="password" className="floatLabel">Password</label>
			    <input id="password" name="password" type="password"/>
			    {/* <span>Enter a password longer than 8 characters</span> */}
		    </p>
		    <p>
			    <label htmlFor="confirm_password" className="floatLabel">Confirm Password</label>
			    <input id="confirm_password" name="confirm_password" type="password"/>
			    {/* <span>Your passwords do not match</span> */}
		    </p>
		    <p>
			    <input type="button" value="Create My Account" id="submit"/>
		    </p>
            <p>
            <button id='text'>
            Sign in with Google
            </button>
            </p>
            <p>
                <span>Already have an account?Login</span>
            </p>
	    </form>
        </div>
    </>
  )
}
