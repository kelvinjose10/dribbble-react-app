import React from 'react';
import ReactDOM from 'react-dom';
import DribbbleApp from './DribbbleApp';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <DribbbleApp />
  </React.StrictMode>,
  document.getElementById('root')
);
