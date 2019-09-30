import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NoMatch from "./pages/NoMatch";
import ProductsDisplayedInStore from "./pages/ProductsDisplayedInStore";
import Cart from "./pages/Cart";

//all of the possible routes

function App() {
  return (
    <Router>
      <div>
       
        <Switch>
          <Route exact path="/" component={ProductsDisplayedInStore} />
          <Route exact path="/" component={ProductsDisplayedInStore} />
          <Route exact path="/userCart/:id" component={Cart} />
          <Route exact path="/userCart" component={Cart} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
