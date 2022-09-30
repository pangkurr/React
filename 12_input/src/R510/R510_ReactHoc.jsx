import React from "react";
import withHocComponent from "./R510_withHocComponent";

class ReactHoc extends React.Component{

  render(){
    console.log("2. 훅 컴포넌트 렌더");
    return <h2>props.name : {this.props.name}</h2>;
  }
}

export default withHocComponent(ReactHoc,"R510_ReactHoc");