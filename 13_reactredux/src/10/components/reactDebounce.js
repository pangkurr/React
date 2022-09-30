import React,{Component} from "react";
import {debounce} from "lodash";
// lodash 패키지의 debounce 함수
// 마지막 이벤트가 실행되고 일정 시간 동안 추가 이벤트가 발생하지 않을 때 실행되는 함수
// 연속된 이벤트 호출이 일어나는 상황에 사용 -> 꼭 필요한 시점에만 함수를 실행하므로 서버의 자원(리소스)를 효율적으로 활용


class reactDebounce extends Component{
  debounceFunc = debounce(()=>{
    console.log('연관검색어 API Call');
  },1000);
  
  render(){
    return(
      <>
        <h2>검색어 입력</h2>
        <input type="text" onChange={this.debounceFunc}/>
      </>
    );
  }
}

export default reactDebounce;
//헤더 영역 메뉴의 '검색'을 클릭하여 확인