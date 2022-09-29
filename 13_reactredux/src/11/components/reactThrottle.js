import React,{Component} from "react";
import {throttle} from "lodash";

class reactDebounce extends Component{
  throttleFunc = throttle(()=>{
    console.log('throttle API Call');
  },1000);
  
  render(){
    return(
      <>
        <h2>검색어 입력</h2>
        <input type="text" onChange={this.throttleFunc}/>
      </>
    );
  }
}

export default reactDebounce;
//헤더 영역 메뉴의 '검색'을 클릭하여 확인