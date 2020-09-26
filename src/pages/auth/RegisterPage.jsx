import React from 'react';
import SignUp from '../../components/signUp/SignUp';
import Background from '../../components/ui/Background';
import Logo from '../../assets/img/logo.png';
import Logo2 from '../../assets/img/logo2.png';

const RegisterPage = () => {
  return ( 
      <div className="container-fluid">      
        <div className="row container__main">
          <Background logo2={Logo2} position="app__logo" logo={Logo} classBackground="app__background" classLabel="label-color" classDesc="app__desc"/>
          <SignUp />
        </div>
      </div>
  );
};

export default RegisterPage;
