import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";

import setAuthToken from "./utils/setAuthToken";

import "./App.css";

//component imports
import Home from "./components/layout/Home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Account from "./components/account/Account";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import ProtectedRoute from "./components/route/ProtectedRoute";

import DisplayBibleBookChapters from "./components/DisplayBibleBookChapters";
import DisplayChapter from "./components/DisplayChapter";

import Verse from "./components/account/Verse";

if (localStorage.token) {
   setAuthToken(localStorage.token);
}

function App() {
   useEffect(() => {
      store.dispatch(loadUser());
   }, []);

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
                     <ProtectedRoute
                        exact
                        path="/account"
                        component={Account}
                     />
                     <ProtectedRoute path="/verse/:id" component={Verse} />
                  </Switch>
               </div>
            </Fragment>
            <Footer />
         </Router>
      </Provider>
   );
}

export default App;
