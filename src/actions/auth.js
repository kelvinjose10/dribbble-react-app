import { types } from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { uiFinishtLoading, uiStartLoading } from './loading';

export const startLoginEmailPassword = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(uiStartLoading());
      let { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      dispatch(login(user.uid, user.displayName));
      dispatch(uiFinishtLoading());
    } catch (error) {
      console.error(error);
      dispatch(uiFinishtLoading());
    }
  };
};

export const startRegisterWithEmailPassword = (email, password, name) => {
  return async (dispatch) => {
    try {
      let { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      await user.updateProfile({ displayName: name });
      dispatch(login(user.uid, user.displayName));
    } catch (error) {
      console.error(error);
    }
  };
};

export const startGoogleSingIn = () => {
  return async (dispatch) => {
    try {
      let { user } = await firebase.auth().signInWithPopup(googleAuthProvider);
      dispatch(login(user.uid, user.displayName));
    } catch (error) {
      console.error(error);
    }
  };
};

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};
