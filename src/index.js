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
import {Provider} from 'react-redux' // Provider是react-redux两个核心工具之一，作用：将store传递到每个项目中的组件中
import store from './store/index'

// 修改主题色
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
  // 使用mui
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
