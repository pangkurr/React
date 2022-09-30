//패키지 설치
//npm install --save react-router-dom
//라우팅 (routing) : 호출되는 URL에 따라 페이지(VIEW)이동을 설정하는 것.
//view : component를 이용
// react-router-dom : 패키지가 제공하는 기능
// Route : 호출되는 URL에 따라 이동할 컴포넌트 정의. (단, react  v18부터는 routes로 감싸야함)
// Link : 페이지에 표시되는 링크를 클릭하면 URL 호출(a태그와 동일)
// BrowserRouter : 

import React from 'react';
import * as ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import '../index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

serviceWorker.unregister();