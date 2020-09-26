import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';

const SignUp = () => {
  const [stateForm, handleChangeInput] = useForm({
    nameForm: '',
    uernameFrom: '',
    emailForm: '',
    passForm: '',
    checkForm: false,
  });

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(stateForm);
  };

  const { nameForm, uernameFrom, emailForm, passForm, checkForm } = stateForm;

  return (
    <div className='col-9 container__form'>
      <p>
        Already a member?{' '}
        <Link style={{ textDecoration: 'none' }} to='/auth/login'>
          <span className='pointer'>Sign in</span>
        </Link>
      </p>
      <div className='container__form__input'>
        <form autoComplete='off' onSubmit={handleLogin}>
          <h2>Sign up to Dribbble</h2>
          <div className='btn btn-primary btn-block btn__main'>
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
            Sign up with Google
          </div>
          <hr className='divider__form' />
          <div className='form-row'>
            <div className='form-group col-md-6'>
              <label>Name</label>
              <input
                type='text'
                name='nameForm'
                className='form-control'
                value={nameForm}
                onChange={handleChangeInput}
              />
            </div>
            <div className='form-group col-md-6'>
              <label>Username</label>
              <input
                type='username'
                name='uernameFrom'
                value={uernameFrom}
                className='form-control'
                onChange={handleChangeInput}
              />
            </div>
            <div className='form-group col-md-12'>
              <label>Email</label>
              <input
                type='email'
                name='emailForm'
                value={emailForm}
                className='form-control'
                onChange={handleChangeInput}
              />
            </div>
            <div className='form-group col-md-12'>
              <label>Password</label>
              <input
                type='password'
                name='passForm'
                value={passForm}
                className='form-control'
                autoComplete='new-password'
                placeholder='6+ characters'
                onChange={handleChangeInput}
              />
            </div>
            <div className='form-group'>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='gridCheck'
                  name='checkForm'
                  checked={checkForm}
                  onChange={handleChangeInput}
                />
                <p>
                  Creating an account means you’re okay with our
                  <span className='pointer'>
                    Terms of Service, Privacy Policy
                  </span>
                  , and our default{' '}
                  <span className='pointer'>Notification Settings</span>.
                </p>
              </div>
            </div>
            <button className='btn  btn-block btn__create'>
              Create account
            </button>
            <div className='minor__text'>
              <p>
                This site is protected by reCAPTCHA and the Google{' '}
                <span className='pointer'>Privacy Policy </span>and{' '}
                <span>Terms of Service</span> apply.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;