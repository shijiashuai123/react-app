import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './assets/reset.css'
// import './assets/rem.js'
import registerServiceWorker from './registerServiceWorker';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import {teal, red } from '@material-ui/core/colors';
const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: teal,
  },
  status: {
    danger: red,
  },
  typography: {
    useNextVariants: true,
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root'));
registerServiceWorker();

