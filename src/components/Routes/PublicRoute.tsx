import React from "react";
import { Redirect, Route } from "react-router-dom";

const PublicRoute = ({ component: Component, authenticated, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !authenticated ? <Component {...props} /> : <Redirect to="/chat" />
      }
    ></Route>
  );
};

export default PublicRoute;
