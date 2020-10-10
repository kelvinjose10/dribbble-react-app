import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ isAuthenticate, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticate ? <Redirect to='/' /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
