import React from "react";
import "../Styles/Login.css";

export default function Login() {
  return (
    <>
    <div id="RightSideSection" className="Login">
        <form id="form">
          <h2 id="h2">Log in</h2>

          <p id='p'>
            <label htmlFor="Email" className="floatLabel">
              email
            </label>
            <input id="Email" name="email" type="text" />
          </p>

          <p id='p'>
            <label htmlFor="password" className="floatLabel">
              Password
            </label>
            <input id="password" name="password" type="password" />
            <span>forgot password ? </span>
          </p>

          <p id='p'>
            <input type="button" value="Log in" id="submit" />
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
