import React from "react";
import Signin from "../../components/sign-in/sign-in.comp";
import Signup from "../../components/sign-up/sign-up.comp";

import './signin-and-signup.scss'

const SigninAndSignupPage = () => (
  <div className="signin-and-signup">
    <Signin />
    <Signup />
  </div>
);
export default SigninAndSignupPage;
