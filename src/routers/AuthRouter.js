import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
const AuthRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/auth/login" component={LoginPage}></Route>
        <Route exact path="/auth/register" component={RegisterPage}></Route>
        <Redirect to="/auth/login" />
      </Switch>
    </div>
  );
};

export default AuthRouter;
