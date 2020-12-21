import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './i18n';
import './css/fontello/css/fontello-embedded.css'
import './css/style.min.css'
import './css/animation.css'
import './css/__colors.css'
import './css/__styles.css'
import './css/custom.css'
import './css/responsive.min.css'
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
