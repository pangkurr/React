//패키지 설치
//npm install --save react-cookies
//serviceWorker.js 사용
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import '../index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 쿠키 : 사용자가 접속한 웹 사이트의 서버를 통해 사용자 컴퓨터(클라이언트)에 설치되는 정보. 사용자 정보. 사용자정보를 저장하거나 마케팅 목적으로 사용
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);

serviceWorker.unregister();