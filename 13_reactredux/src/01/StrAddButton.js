import React, {Component} from "react";
import {add} from "./actions";

class StrAddButton extends Component{
  render(){
    return <input value="100 추가" type="button" onClick={this.addString}/>
  }

  addString = () =>{
    this.props.store.dispatch(add());
  };
}

export default StrAddButton;