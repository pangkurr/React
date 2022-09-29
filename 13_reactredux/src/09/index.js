//패키지 설치
//npm install --save react-router-dom

// [CSS],[IMG]디렉터리 붙여넣기
// [.components/Header], [./components/Footer] 붙여넣기

import React from 'react';
import * as ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import '../index.css';
import App from './components/App';
// import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

// serviceWorker.unregister();