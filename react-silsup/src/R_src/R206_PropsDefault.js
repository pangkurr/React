//props를 기본값으로 정의
import React,{Component} from "react";

class PropsDefault extends Component{
  render(){
    let{
      ReactString,
      ReactNumber
    }=this.props
    return(
      <div style={{padding:"0px"}}>
        {ReactString}{ReactNumber}
      </div>
    )
  }  
}

//app.js 에서 ReactString 또는 ReactNumber를 전달 받지 못할 때 사용할 기본값 정의
PropsDefault.defaultProps={
  ReactString:"리액트",
  ReactNumber:400
}

export default PropsDefault;