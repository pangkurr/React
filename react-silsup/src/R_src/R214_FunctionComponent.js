//함수형 컴포넌트 사용
//클래스형 컴포넌트와 달리, state가 없어 생명주기 함수 사용 불가
//상위 컴포넌트에서 props와 context를 매개변수로 전달받아 사용하고 render() 함수가 없으므로 return()만 사용하여 화면 렌더링을 한다.
import React from "react";

function FunctionComponent(props){
  let{contents}=props;
  return(
    <h2>{contents}</h2>
  )
}

export default FunctionComponent;