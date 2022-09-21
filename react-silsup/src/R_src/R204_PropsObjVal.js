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

PropsObjVal.propType={
  ObjectJson: datatype.shape({
    react: datatype.string,
    twohundred: datatype.number
  })
}

export default PropsObjVal;