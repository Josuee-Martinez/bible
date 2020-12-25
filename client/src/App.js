import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

//component imports
import Home from "./components/layout/Home";
import DisplayBibleBookChapters from "./components/DisplayBibleBookChapters";
import DisplayChapter from "./components/DisplayChapter";

function App() {
   return (
      <Provider store={store}>
         <Router>
            <Fragment>
               <Switch>
                  <Route exact path="/" component={Home} />
                  <Route
                     exact
                     path="/book/:name"
                     component={DisplayBibleBookChapters}
                  />
                  <Route
                     exact
                     path="/chapter/:chapterId"
                     component={DisplayChapter}
                  />
               </Switch>
            </Fragment>
         </Router>
      </Provider>
   );
}

export default App;
