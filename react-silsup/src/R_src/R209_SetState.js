//setState() 함수 사용
import React,{Component} from "react";

class SetState extends Component{
  constructor(props){
    super(props);
    this.state={
      StateString: 'react',
    }
  }

  // this.state.[변수명]=value
  // 위 방식으로 직접 state를 변경하면 render() 함수는 호출되지 않아 화면에 보이는 state는 변경 전 상태로 남게 된다.
  StateChange = (flag)=>{
    //render() 미호출
    if(flag == 'direct') this.state.StateString = '리액트';
    //rneder() 호출
    if(flag == 'setstate') this.setState({StateString : '리액트'});
  }

  render(){
    return(
      <div style={{padding:"0px"}}>
        <button onClick={(e)=>this.StateChange('direct',e)}>state 직접 변경</button>
        <button onClick={(e)=>this.StateChange('setstate',e)}>setState로 변경</button><br/>

        {/* 기본값:react */}
        [state 변경하기 StateString : {this.state.StateString}]
      </div>
    )
  }
}

export default SetState;