import React from 'react';
import { hot } from 'react-hot-loader';

import './assets/css/styles.css';
import './assets/scss/styles.scss';

import { MainContainer } from './containers/Main';
// import { MainContainer } from './containers/Main';


export const Application = hot(module)(() => (
  <React.Fragment>
    <MainContainer />
  </React.Fragment>
));
