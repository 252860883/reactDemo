import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//这里是出口文件 
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();



