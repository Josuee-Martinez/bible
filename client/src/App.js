import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

//component imports
import Home from "./components/layout/Home";

function App() {
   return (
      <Provider store={store}>
         <Router>
            <Fragment>
               <Switch>
                  <Route exact path="/" component={Home} />
               </Switch>
            </Fragment>
         </Router>
      </Provider>
   );
}

export default App;
