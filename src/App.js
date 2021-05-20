import HomePage from "./pages/homepage/homepage.comp";
import ShopPage from './pages/shop/shop.comp';
import { Route, Switch } from "react-router-dom";
import Header from './components/header/header.comp';
import SigninAndSignup from './pages/signin-and-signup/signin-and-signup.comp';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import "./App.css";
import React from "react";


class App extends React.Component{
  constructor(){
    super()
    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth = null;
  componentDidMount = () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      //this.setState({currentUser:user})
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot =>{
          this.setState({
            currentUser:{
              id:snapshot.id,
              ...snapshot.data()
            }
          });         
        });
      }  
      this.setState({currentUser:userAuth})    
    });
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={ SigninAndSignup}/>
        </Switch>
      </div>
    );
  }
  
}

export default App;
