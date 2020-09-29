import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./components/Routes/PrivateRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { auth } from "./services/firebase";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        setAuthenticated(true);
        setLoading(false);
      } else {
        setAuthenticated(false);
        setLoading(false);
      }
    });
  }, []);

  return loading ? (
    <h2>loading...</h2>
  ) : (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute
          path="/chat"
          authenticated={authenticated}
          component={Chat}
        />
        <PublicRoute
          path="/signup"
          authenticated={authenticated}
          component={Signup}
        />
        <PublicRoute
          path="/login"
          authenticated={authenticated}
          component={Login}
        />
      </Switch>
    </Router>
  );
};

export default App;
