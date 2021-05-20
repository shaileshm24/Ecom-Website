import React from "react";
import FormInput from '../form-input/form-input.comp';
import CustomeButton from '../custom-button/custom-button.comp';
import {auth, signinWithGoogle} from '../../firebase/firebase.utils';

import './sign-in.scss'
class Signin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = async(event) => {
    event.preventDefault();
    const {email, password} = this.state;
    try{
      await auth.signInWithEmailAndPassword(email,password);
      this.setState({ email: "", password: "" })
    } catch (error){
      console.log(error);
    }
   ;
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
          <CustomeButton type="button" onClick={signinWithGoogle} isGoogleSignin > Sign In With Google </CustomeButton>
         </div>
          
        </form>
      </div>
    );
  }
}

export default Signin;
