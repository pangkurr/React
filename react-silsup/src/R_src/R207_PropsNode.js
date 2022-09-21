//props의 자식 컴포넌트에 node 전달
//props를 하위 컴포넌트 태그 안쪾에 선언 후 전달하는 것 외 하위 컴포넌트 태그 사이에 작성도니 node도 전달 가능
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
//상위 컴포넌트에서 전달받은 노드를 this.props.children 문법으로 접근하여 사용가능

export default PropsNode;