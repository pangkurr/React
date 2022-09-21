//shallow-equal 사용(class형 컴포넌트)
import React,{Component} from "react";

//shallow-equal 을 사용하기 위해서 설치해야됨
//npm install shallow-equal; 명령어로 설치
import {shallowEqualArrays} from "shallow-equal";

class ShallowEqual extends Component{
  constructor(props){
    super(props);
    this.state={StateString:'react'}
  }

  shouldComponentUpdate(nextProps,nextState){
    return !shallowEqualArrays(this.state, nextState);
  }

  componentDidMount(){
    const object = {react : '200'};
    const Array1 = ['리액트',object];
    const Array2 = ['리액트',object];
    const Array3 = ['리액트',{react:'200'}];

    //shallow 쓰는 이유 : 비교문을 객관적으로 보기위해
    console.log('shallowEqualArrays(Array1, Array2) : '+ shallowEqualArrays(Array1,Array2));
    console.log('shallowEqualArrays(Array2, Array3) : '+ shallowEqualArrays(Array2,Array3));
    this.setState({StateString : 'react'});
  }

  render(){
    console.log('render() 실행');
    return(
      <div></div>
    )
  }
}

export default ShallowEqual;