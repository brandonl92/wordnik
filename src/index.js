import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Api from './Api';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

window.Api = new Api();
