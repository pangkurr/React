//패키지 설치
//npm install --save react-redux
//예제 01의 [actions], [reducers] 디렉터리를 붙여넣는다.

//react-redux : redux를 react와 연동하여 사용하기 편하게 만든 라이브러리
//react-redux의 장점
//1)store를 하위 컴포넌트에 매번 상속하지 않고 사용 가능
//2) 스토어 데이터를 사용, 변경하는 코드를 모듈화하여 컴포넌트 내에 중복된 코드의 사용을 최소화 가능
//데이터 변경 과정
// 스토어>컴포넌트>액션>리듀서>스토어
//단, '스토어>컴포넌트', ' 컴포넌트>액션' 단계에서 connect라는 패키지 함수 사용
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import '../index.css';
import App from './App';
import {legacy_createStore} from 'redux';
import { Provider } from 'react-redux'; //store 상속
import reducers from './reducers';

const store = legacy_createStore(reducers);
const root = ReactDOM.createRoot(document.getElementById('root'));

const listener = ()=>{
  root.render(
    <Provider store={store}>
      <App indexProp="react"/>
    </Provider>
  );
};

store.subscribe(listener);
listener();