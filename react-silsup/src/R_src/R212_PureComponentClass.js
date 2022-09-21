// PureComponent 사용(class형 컴포넌트)
// PureComponent: 비교 대상의 값을 비교하여 동일하지 않으면 변경이 발생되었다고 판단
//불필요한 render() 함수의 실행을 줄여서 페이지의 성능 향상 가능
import React,{Component} from "react";

class PureComponentClass extends Component{
  constructor(props){
    super(props);
    this.state={
      StateString:'react',
      StateArrayObj:['react',{react:'200'}]
    }
  }

  buttonClick = (type)=>{
    if(type ==="String"){
      this.setState({StateString:'react'});
    }else{
      this.setState({StateArrayObj: ['react',{react:'200'}]});
    }
  }

  // 객체 배열 변경을 누르면 render()함수를 호출한다.
  render(){
    console.log('render()실행');
    return(
      <div>
        <button onClick={e => this.buttonClick('String')}>문자열 변경</button>
        <button onClick={e => this.buttonClick('ArrayOjbect')}>객체 배열 변경</button>
      </div>
    )
  }
}

export default PureComponentClass;