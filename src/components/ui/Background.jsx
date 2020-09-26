import React from 'react';


const Background = ({logo, logo2, classBackground, classLabel, position, classDesc}) => {
  return (
        <div className={`col-3 ${classBackground}`}>
         <img className="app__logo__label" src={logo2} alt="logo"/>
         <h1 className={`label-background ${classLabel}`}>Discover the world’s top Designers &amp; Creatives.</h1>
         <img className={position} src={logo} alt="website logo"/>
         <p className={`${classLabel} ${classDesc}`}>Art by <span>Peter Tarka</span></p>
        </div>
  );
};

export default Background;
