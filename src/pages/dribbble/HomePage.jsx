import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';

const HomePage = () => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(startLogout());
  };
  return (
    <div>
      <h1>Dribbble</h1>
      <button className='btn btn-outline-primary' onClick={handleOnClick}>
        Logout
      </button>
    </div>
  );
};

export default HomePage;
