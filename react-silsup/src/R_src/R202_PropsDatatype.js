// props 자료형 선언
import React, {Component} from "react";
import datatype from 'prop-types'

class PropsDatatype extends Component{
  render(){
    let{
      String, Number, Boolean, Array, ObjectJson, Function
    }=this.props
    return(
      <div style={{padding:"0px"}}>
        <p>StringProps: {String}</p>
        <p>NumberProps: {Number}</p>
        <span>BooleanProps: {Boolean}</span>
        <p>ArrayProps: {Array.toString()}</p>
        <p>ObjectJsonProps: {JSON.stringify(ObjectJson)}</p>
        <p>FunctionProps: {Function}</p>
      </div>
    )
  }
}

PropsDatatype.protoTypes={
  String: datatype.number,
  Number: datatype.number,
  Boolean: datatype.bool,
  Array: datatype.array,
  ObjectJson:datatype.object,
  Function: datatype.func,
}

export default PropsDatatype;