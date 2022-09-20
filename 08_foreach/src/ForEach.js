// .src/ForEach.js

import React, {Component} from 'react';

class ForEach extends Component{

  componentDidMount(){
    var For_Arr = [3,2,8,8];
    var For_newArr=[];

    for(var i=0;i<For_Arr.length; i++){
      For_newArr.push(For_Arr[i]);
    }
    console.log('For_newArr: ['+For_newArr +']');

    var ForEach_Arr=[3,5,9,8];
    var ForEach_newArr=[];

    ForEach_Arr.forEach( (result) =>{
      ForEach_newArr.push(result);
    });
    //forEach는 각값에 대해 실행함.
    //forEach 함수는 순서와 배열의 크기 정보를 사용하지 않는다.
    //0부터 배열의 크기만큼 반복하면서 순서대로 배열의 값을 리턴한다.
    //실행 될 때마다 콜백 함수로 결과(result)를 받아 새로운 함수에 대입한다.

    console.log('ForEach_newArr: ['+ForEach_newArr+']');
  }

  render(){
    return(
      <h2>ForEach문 작성하기</h2>
    );
  }
}

export default ForEach;
