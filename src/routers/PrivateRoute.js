import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticate, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticate ? (
          <Component {...props} />
        ) : (
          <Redirect to='/auth/login' />
        )
      }
    />
  );
};

export default PrivateRoute;
