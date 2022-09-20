// ./src/LifeCycleSample.js
//리액트의 생명주기
// --컴포넌트의 생성, 변경, 소멸의 과정
// --컴포넌트의 생성 과정
//  render(), constructor(), getDerivedStateFormProps(), componentDidMound()
// render() : return 되는 HTML 형식의 코드를 화면에 그려주는 함수. 화면의 내용이 변경되어야 할 시점에 자동 호출
import React, {Component} from 'react';

class LifeCycleSample extends Component {
  render(){
    return (
      <h2>render() 함수</h2>
    )
  }
}

export default LifeCycleSample;