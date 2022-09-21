//hook 사용
// 함수형 컴포넌트에서 state와 생명 주기 함수를 사욯할 수 있게 해주는 기능
//useState(), useEffect
import React, {useState, useEffect} from "react";

function ReactHook(props){
  const [contents,setContents] =useState('[THIS IS REACT]');

  useEffect(()=>{
    console.log('useEffect');
  });

  return(
    <div style={{padding:"0px"}}>
      <h2>{contents}</h2>
      <button onClick={()=>setContents('[THIS IS HOOK')}>버튼</button>
    </div>
  )
}

export default ReactHook;