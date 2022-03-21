import React from "react";
import "../Styles/Login.css";

import { useContext } from 'react';
import LoggedInStatusContext from '../Context/LoggedInStatus/LoggedInStatusContext';

export default function Login() {

  const is_loggedin = useContext(LoggedInStatusContext);
  return (
    <>
    <div id="RightSideSection" className="Login">
        <form id="form" onSubmit={(e)=>{
               e.preventDefault();
               is_loggedin.setLoggedin(true);
        }}>
          <h2 id="Heading">Log in</h2>

          <p id='p'>
            <label id="Label" htmlFor="Email" className="floatLabel">
              email
            </label>
            <input id="Email" name="email" type="text" />
          </p>

          <p id='p'>
            <label id="Label" htmlFor="password" className="floatLabel">
              Password
            </label>
            <input id="password" name="password" type="password" />
            <span>forgot password ? </span>
          </p>

          <p id='p'>
            <input type="submit" value="Log in" id="submit" />
          </p>
          <p id='p'>
            <button id="text">
            <div className="google-icon"> <img src="Images/icon-google.png" alt="" /></div>
              <div> Sign in with Google </div>
            </button>
          </p>
          <p id='p'>
            <span id="text_atlast">
              Dont have account? <button> Sign up</button>
            </span>
          </p>
        </form>
      </div>

     
    </>
  );
}
