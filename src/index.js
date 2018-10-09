import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { HashRouter as H } from 'react-router-dom'; 
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<H>
    <App />
</H>
, document.getElementById('root'));
// registerServiceWorker();