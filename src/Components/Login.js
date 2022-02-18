import React from "react";
import "../Styles/Login.css";

export default function Login() {
  return (
    <>
      <div className={"Login"}>
        <form>
          <h2>Log in</h2>

          <p>
            <label htmlFor="email" className="floatLabel">
              email
            </label>
            <input id="U_Name" name="Username" type="text" />
          </p>

          <p>
            <label htmlFor="password" className="floatLabel">
              Password
            </label>
            <input id="password" name="password" type="password" />
            <span>forgot password ? </span>
          </p>

          <p>
            <input type="button" value="Log in" id="submit" />
          </p>
          <p>
            <button id="text">Log in with</button>
          </p>
          <p>
            <span>
              Dont have account? <button> Sign up</button>
            </span>
          </p>
        </form>
      </div>
    </>
  );
}
