import React from "react";
import '../Styles/Login.css';
import '../Styles/LoginUtil.css';

export default function login() {

  return (

    
    <div class="container-login100" >
        <div class="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
            <form class="login100-form validate-form flex-sb flex-w">
                <span class="login100-form-title p-b-53">
                    Sign In With
                </span>

                {/* sign in with facebook and google button  */}
                <a href="/" class="btn-face m-b-20">
                    <i class="fa fa-facebook-official"></i>
                    Facebook
                </a>

                <a href="/" class="btn-google m-b-20">
                    <img src="Images/icon-google.png" alt="GOOGLE"/>
                    Google
                </a>
                
                {/* username input section  */}
                <div class="p-t-31 p-b-9">
                    <span class="txt1">
                        Username
                    </span>
                </div>
                <div class="wrap-input100 validate-input" data-validate = "Username is required">
                    <input class="input100" type="text" name="username" />
                    <span class="focus-input100"></span>
                </div>
                
                {/* password input section */}
                <div class="p-t-13 p-b-9">
                    <span class="txt1">
                        Password
                    </span>

                    <a href="/" class="txt2 bo1 m-l-5">
                        Forgot?
                    </a>
                </div>
                <div class="wrap-input100 " >
                    <input class="input100" type="password" name="pass" />
                    <span class="focus-input100"></span>
                </div>

                {/* lsign in button section */}
                <div class="container-login100-form-btn m-t-17">
                    <button class="login100-form-btn">
                        Sign In
                    </button>
                </div>

                <div class="w-full text-center p-t-55">
                    <span class="txt2">
                        Not a member?
                    </span>

                    <a href="/" class="txt2 bo1">
                        Sign up now
                    </a>
                </div>
            </form>
        </div>
    </div>

   
  );
}
