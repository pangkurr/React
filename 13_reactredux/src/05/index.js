//패키지 설치
//npm install --save react-cookies
//serviceWorker.js 사용
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import '../index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);

serviceWorker.unregister();