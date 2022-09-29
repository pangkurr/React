import React, {Component} from "react";
import {connect} from 'react-redux';
import {add} from "./actions";


//react-redux로 스토어 데이터 변경
class StrAddButton extends Component{
  render(){
    return (
    // <input value="100 추가" type="button" onClick={this.addString}/>
    <input value="100 추가" type="button" onClick={this.props.addString}/>
    );
  }

  // addString = () =>{
  //   this.props.store.dispatch(add());
  // };
}

let mapStateToProps = (dispatch, props)=>{
  console.log("Props from App.js : "+props.AppProp);
  return{
    addString: ()=>dispatch(add()),
  };
};

StrAddButton = connect(null,mapStateToProps)(StrAddButton);

export default StrAddButton;