import React,{Component} from "react";
import {connect} from 'react-redux'; //connect 함수는 4개의 파라미터를 받을 수 있음.
import StrAddButton from "./StrAddButton";

//react-redux로 스토어 데이터 사용
class App extends Component{
  render(){
    return(
      <div>
        <h1>React Redux</h1>
        {/* <span>{this.props.store.getState().data.str}</span> */}
        <span>{this.props.str}</span>
        <br />
        {/* <StrAddButton store={this.props.store} /> */}
        <StrAddButton AppProp="100"/>
      </div>
    );
  }
}

let mapStateToProps=(state,props)=>{
  console.log("Props from index.js : " + props.indexProp);
  return{
    str:state.data.str,
  };
};

App = connect(mapStateToProps, null)(App);

export default App;