//props의 자식 컴포넌트에 node 전달
import React,{Component} from "react";

class PropsNode extends Component{
  render(){
    return(
      <div style={{padding:"0px"}}>
        {this.props.children}
      </div>
    )
  }
}

export default PropsNode;