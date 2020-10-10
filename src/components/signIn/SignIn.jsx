import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLoginEmailPassword, startGoogleSingIn } from '../../actions/auth';
import useForm from '../../hooks/useForm';

const SignIn = () => {
  const dispatch = useDispatch();
  const [stateForm, handleChangeInput] = useForm({
    emailForm: '',
    passForm: '',
    errors: [],
  });

  const { loading } = useSelector((state) => state.ui);

  const { emailForm, passForm } = stateForm;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(emailForm, passForm));
  };

  const hanldeLoginGoogle = () => {
    dispatch(startGoogleSingIn());
  };

  return (
    <div className='col-9 container__form'>
      <p>
        Not a member?
        <Link style={{ textDecoration: 'none' }} to='/register'>
          <span className='pointer'> Sign up now</span>
        </Link>
      </p>
      <div className='app__login__form'>
        <form autoComplete='off' onSubmit={handleLogin}>
          <h2>Sign in to Dribbble</h2>
          <div
            className='btn btn-primary btn-block btn__main'
            onClick={hanldeLoginGoogle}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              aria-labelledby='j2ou8lc16bvchkbqgem0nrmkms0cgo'
              role='img'
              viewBox='0 0 24 24'
              className='icon'
            >
              <title id='j2ou8lc16bvchkbqgem0nrmkms0cgo'>Google icon</title>
              <path d='M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z'></path>
            </svg>
            Sign in with Google
          </div>
          <hr className='divider__form' />
          <div className='form-row'>
            <div className='form-group col-md-12'>
              <label>Username or Email Address</label>
              <input
                type='text'
                name='emailForm'
                className='form-control'
                value={emailForm}
                onChange={handleChangeInput}
              />
            </div>
            <div className='form-group col-md-12'>
              <label>Password</label>
              <input
                type='password'
                name='passForm'
                className='form-control'
                autoComplete='new-password'
                value={passForm}
                onChange={handleChangeInput}
              />
            </div>
            <p style={{ fontSize: '15px' }} className='pl-2'>
              <span className='pointer'>Forgot password?</span>
            </p>
            <button className='btn  btn-block btn__create' disabled={loading}>
              {loading ? (
                <span>
                  <i className='fa fa-spinner fa-spin' aria-hidden='true'></i>{' '}
                  Loading
                </span>
              ) : (
                'Sign In'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
