//props 객체형으로 사용
//datatype 사용시 import 시켜줘야한다.
import React, {Component} from 'react';
import datatype from 'prop-types';

class PropsObjVal extends Component{
  render(){
    let{
      ObjectJson
    }=this.props
    return(
      <div style={{padding:"0px"}}>
        {JSON.stringify(ObjectJson)}
      </div>
    )
  }
}

//props 값을 객체로 하위 컴포넌트에 전달할 때
//자료형을 object로 선언
//객체 형태(객체의 내부 변수들)의 자료형을 선언할 때: shape 유형 사용
PropsObjVal.propType={
  ObjectJson: datatype.shape({
    react: datatype.string,
    twohundred: datatype.number
  })
}

export default PropsObjVal;