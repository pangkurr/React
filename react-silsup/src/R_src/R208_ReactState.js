//state 사용
//props를 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달할 때 사용하면, state는 하나의 컴포넌트 내에서 전역 변수처럼 사용
//문법: this.state.[변수명]
//변수명을 통해 app.js에서 데이터를 받아옴
import React,{Component} from "react";

class ReactState extends Component{
  constructor (props){
    super(props);
    this.state={
        StateString: this.props.reactString,
        StateNumber: 200,
    }
  }

  render(){
    return(
      <div style={{padding:"0px"}}>
        {this.state.StateString}{this.state.StateNumber}
      </div>
    )
  }
}

export default ReactState;