// .src/Es6.js

import React, {Component} from 'react';

class Es6 extends Component{
  constructor(props){
    super(props);
    this.state={};
  }

  componentDidMount(){
    var str1 = '자바스크립트';
    var str2 = '입니다 \n 다음 줄!!';
    console.log(str1+' 문자열'+ str2 + '~~!');

    var estr1 = 'ES6';
    var estr2 = '입니다';
    console.log(`${estr1} 문자열 ${estr2}!!____다음 줄`);

    var lstr = 'ES6에 추가된 String 함수';
    console.log('startWith: '+ lstr.startsWith('ES6에 추가'));
    console.log('endWith: '+ lstr.endsWith('함수들...'));
    console.log('includes: '+lstr.includes('추가된 String'));
  }
  //startWith() : 변수 앞에서부터 일치하는 문자열 검색
  //endWith() : 변수 뒤에서부터 일치하는 문자열 검색
  //includes() : 위치 상관없이 특정 문자열이 포함되어 있는지 검색
  //함수의 조건에 만족하면 true, 만족하지 않으면 false 리턴


  shouldComponentUpdate(props,state){
    console.log('shouldComponentUpdate 호출 / tmp_state2 = '+ state.tmp_state2);
    return state.tmp_state2;
  }

  render(){
    return (
      <h2>ES6 템플릿 문자열</h2>
    )
  }
}

export default Es6;