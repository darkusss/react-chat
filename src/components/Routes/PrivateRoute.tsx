import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  authenticated,
  ...rest
}: any) => {
  return (
    <Route
      {...rest}
      render={(props): any =>
        authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { frame: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
