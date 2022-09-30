//패키지 설치
//npm install --save redux

//컨텍스트 : 부모 컴포넌트에서 생성한 데이터에 모든 자식 컴포넌트에서 접근 가능
// redux : 컴포넌트 외부의 스토어에서 관리 -> 컴포넌트 위치에 관계없이 스토어 접근하여 데이xj를 사용하고 변경 가능
//스토어 > 컴포넌트 > 액션 > 리듀서 > 스토어
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import '../index.css';
import App from './App';
import {legacy_createStore} from 'redux';
import reducers from './reducers';

const store = legacy_createStore(reducers);
const root = ReactDOM.createRoot(document.getElementById('root'));

const listener = ()=>{
  root.render(<App store={store}/>);
};

store.subscribe(listener);
listener();