// .src/componentDidmount.js
// render() 함수가 return 되는 HTML 코드를 렌더링한 후 실행
//화면이 모두 렌더링 된 후 실행되어야 하는 이벤트 처리나 초기화 등에 가장 많이 활용되는 함수

import React, {Component} from 'react';

class LifeCycle extends Component{
  static getDerivedStateFromProps(props,state){
    console.log('getDerivedStateFromProps 호출: '+ props.prop_value);
    return {tmp_state:props.prop_value};
  }

  constructor(props){
    super(props);
    this.state={};
    console.log("constructor 호출");
  }

  componentDidMount(){
    console.log('componentDidmount 호출');
    console.log('tmp_state : '+ this.state.tmp_state);
    this.setState({tmp_state2:true})
  }

  shouldComponentUpdate(props,state){
    console.log('shouldComponentUpdate 호출 / tmp_state2 = '+ state.tmp_state2);
    return state.tmp_state2;
  }
  //shouldComponentUpdate() 함수는 컴포넌트의 props나state의 변경 과정
  //state 변수는 tmp_state2에 true 세팅
  //-> setState()함수는 변수의 선언과 초기화를 동시에 진행
  //함수 실행시 return 값이 ture 인 경우 render() 함수를 한 번 더 호출

  render(){
    console.log('render 호출');
    return (
      <h2>componentDidmount</h2>
    )
  }
}

export default LifeCycle;