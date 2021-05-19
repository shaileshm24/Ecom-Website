import React from "react";
import FormInput from '../form-input/form-input.comp';
import CustomeButton from '../custom-button/custom-button.comp';
import {signinWithGoogle} from '../../firebase/firebase.utils';

import './sign-in.scss'
class Signin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h1>Already have an account</h1>
        <span>Signin with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />
         
          <FormInput
            type="password"
            name="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="Password"
            required
          />
         <div className='button'>
         <CustomeButton type="Submit"> Sign In </CustomeButton>
          <CustomeButton onClick={signinWithGoogle} isGoogleSignin > Sign In With Google </CustomeButton>
         </div>
          
        </form>
      </div>
    );
  }
}

export default Signin;
