//Fragments 사용
// <> </> 프래그먼트 태그
import React,{Component} from "react";

class Fragments extends Component{
  render(){
    return(
      //정식 문법
      //<React.Fragment>
      <>
        <p>P TAG</p>
        <span>SPAN TAG</span>
      </>
      //약식 문법
      // <>
      //   <p>P TAG</p>
      //   <span> ...</span>
      // </>
    )
  }
}

export default Fragments;