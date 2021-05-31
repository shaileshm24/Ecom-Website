import React from "react";
import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";

import HomePage from "./pages/homepage/homepage.comp";
import ShopPage from "./pages/shop/shop.comp";
import Checkout from './pages/checkout/checkout.comp';

import Header from "./components/header/header.comp";
import SigninAndSignup from "./pages/signin-and-signup/signin-and-signup.comp";

import { setCurrentUser } from "./redux/user/user.actions";
import {selectCurrentUser} from './redux/user/user.selector';
import {createStructuredSelector} from 'reselect';

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount = () => {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //this.setState({currentUser:user})
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      }
      setCurrentUser(userAuth);
    });
  };

  componentDidUpdate() {
    setCurrentUser();
  }
  componentWillUnmount = () => {
    this.unsubscribeFromAuth();
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path ='/checkout' component={Checkout} />
          <Route
            exact
            path= '/signin'
            render={() =>
              this.props.currentUser ? <Redirect to = "/" /> : <SigninAndSignup />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser:selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
