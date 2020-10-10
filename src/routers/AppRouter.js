import React, { useEffect, useState } from 'react';
import { firebase } from '../firebase/firebase-config';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import AuthRouter from './AuthRouter';
import HomePage from '../pages/dribbble/HomePage';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import RegisterPage from '../pages/auth/RegisterPage';

const AppRouter = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      firebase.auth().onAuthStateChanged((user) => {
        if (user?.uid) {
          dispatch(login(user.uid, user.displayName));
          setIsLoading(true);
        } else {
          setIsLoading(false);
        }

        setChecking(false);
      });
    } catch (error) {
      console.error(error);
    }
  }, [dispatch]);

  if (checking) {
    return (
      <div>
        <i
          style={{
            position: 'fixed',
            margin: 'auto',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: '50px',
            fontSize: '45px',
            height: '50px',
          }}
          className='fa fa-spinner fa-spin'
          aria-hidden='true'
        ></i>
      </div>
    );
  }
  return (
    <Router>
      <>
        <Switch>
          <PublicRoute
            path='/auth'
            component={AuthRouter}
            isAuthenticate={isLoading}
          />
          <PrivateRoute
            exact
            path='/'
            component={HomePage}
            isAuthenticate={isLoading}
          />
          <Route exact path='/register' component={RegisterPage}></Route>
          <Redirect to='/auth/login' />
        </Switch>
      </>
    </Router>
  );
};

export default AppRouter;
