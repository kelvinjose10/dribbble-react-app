import React from 'react';
import SignIn from '../../components/signIn/SignIn';
import Background from '../../components/ui/Background';
import Logo from '../../assets/img/logoLogin.png';
import Logo2 from '../../assets/img/logo2Login.png';

const LoginPage = () => {
  return (
    <div className="container-fluid">      
      <div className="row container__main">
        <Background logo2={Logo2} position="app__logo__login" logo={Logo} classBackground="app__background__login" classLabel="label-color__login" classDesc="app__desc__login"/>
        <SignIn />
      </div>
    </div>
  );
};

export default LoginPage;
