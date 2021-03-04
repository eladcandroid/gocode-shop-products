import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./views/Home";
import Product from "./views/product/product";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/product/:id" children={<Product />}></Route>
      </Switch>
    </Router>
  );
}

export default App;
