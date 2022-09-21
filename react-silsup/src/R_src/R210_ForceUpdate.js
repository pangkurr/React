//state 직접 변경 후 forceUpdate() 함수 사용
//직접 수정하면 안된다는 경고문은 무시한다. 일종의 규칙 경고임
//Do not mutate state directly. Use setState() << 무시
import React,{Component} from "react";

class ForceUpdate extends Component{
  constructor(props){
    super(props);
    this.state={
      StateString:'react',
    }
  }

  StateChange = () =>{
    this.state.StateString="리액트";
    this.forceUpdate();
  }

  render(){
    return(
      <div style={{padding:"0px"}}>
        <button onClick={(e)=>this.StateChange('direct',e)}>state 직접 변경</button><br/>
        [state 변경하기] StateString:{this.state.StateString}
      </div>
    )
  }
}

export default ForceUpdate;