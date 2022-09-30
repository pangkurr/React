import React, {Component} from 'react';

class FetchGet extends Component{
  componentDidMount = async ()=>{
    const responce = await fetch('http://date.jsontest.com/');
    const body = await responce.json();
    alert(body.milliseconds_since_epoch);
  }

  render(){
    return(
      <h1>fetch get</h1>
    )
  }
}

// fetch():자바스크립트 내장 함수. 비동기 통신을 구현함.
// async와 await 를 이용해서 비동기 함수를 동기적으로 처리할 수 있다.
export default FetchGet;