//./LifecycleGetDerived.js
// getDerivedStateFromProps(props,state) 함수는
// constructor() 함수 다음으로 실행된다.
// 컴포넌트가 새로운 props를 받게 되었을 때 state를 변경해준다.
//App.js 에서 전달한 prop_value 변수를 props.prop_value로 접근하여 값을 가져올 수 있다.

import React,{Component} from 'react';

class LifecycleGetDerived extends Component{
  static getDerivedStateFromProps(props,state){
    console.log('getDerivedStateFromProps 호출: '+ props.prop_value);
    return {};
  }

  constructor(props){
    super(props);
    this.state={};
    console.log("constructor 호출");
  }

  render(){
    console.log('render 호출');
    return (
      <h2>getderived</h2>
    )
  }
}

export default LifecycleGetDerived;