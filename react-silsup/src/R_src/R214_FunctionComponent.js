//함수형 컴포넌트 사용
import React from "react";

function FunctionComponent(props){
  let{contents}=props;
  return(
    <h2>{contents}</h2>
  )
}

export default FunctionComponent;