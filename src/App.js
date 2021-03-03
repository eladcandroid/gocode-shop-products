import './App.css';
import {Route,BrowserRouter as Router, Switch} from "react-router-dom";
import Home from "./Home";
import Product from "./product/product";
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>

                <Route exact path="/product/:id" children={  <Product/>}>

                </Route>
            </Switch>
        </Router>
    )
}

export default App;
