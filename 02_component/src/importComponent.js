//src/importComponent.js
// 컴포넌트: 특정한 코드 영역을 다른 부분에 이식하거나 재사용(재활용) 하기 위해 사용하는 코드 블록의 단위
// 컴포넌트는 파일 단위로 작성하여 필요한 위치에 임포트(import)하여 사용

//import 에 있는 Component는  extends 옆에 사용된다.
import React, { Component } from 'react';

//importComponent -> import
class Import extends Component{
  render(){
    return(
      <h2>컴포넌트를 import 하여 생성</h2>
    )
  }
}

export default Import;