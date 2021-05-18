import HomePage from "./pages/homepage/homepage.comp";
import ShopPage from './pages/shop/shop.comp';
import { Route, Switch } from "react-router-dom";
import Header from './components/header/header.comp';
import "./App.css";

// const HatsPage = () =>(
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>
// )

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
