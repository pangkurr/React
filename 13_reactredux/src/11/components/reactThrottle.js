import React,{Component} from "react";
import {throttle} from "lodash";
// throttle : debounce와 동일하게 시간 조건을 추가하여 실행 횟수를 제한, 발생한 이벤트 수와 관계없이 지정한 시간 단위당 최대 한 번만 동작한다.
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