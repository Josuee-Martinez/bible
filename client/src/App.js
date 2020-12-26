import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

//component imports
import Home from "./components/layout/Home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";

import DisplayBibleBookChapters from "./components/DisplayBibleBookChapters";
import DisplayChapter from "./components/DisplayChapter";

function App() {
   return (
      <Provider store={store}>
         <Router>
            <Navbar />
            <Fragment>
               <div className="container">
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
                     <Route exact path="/signup" component={Signup} />
                     <Route exact path="/login" component={Login} />
                  </Switch>
               </div>
            </Fragment>
            <Footer />
         </Router>
      </Provider>
   );
}

export default App;
