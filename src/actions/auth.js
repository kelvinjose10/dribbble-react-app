import { types } from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/firebase-config';

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(1234, email));
    }, 3500);
  };
};

export const startGoogleSingIn = () => {
  return async (dispatch) => {
    let { user } = await firebase.auth().signInWithPopup(googleAuthProvider);
    dispatch(login(user.uid, user.displayName));
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
