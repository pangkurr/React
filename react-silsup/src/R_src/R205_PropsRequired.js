// props를 필수 값으로 사용
import React,{Component} from 'react';
import datatype from 'prop-types';

class PropsRequired extends Component{
  render(){
    let{
      ReactString,
      ReactNumber
    }=this.props
    return(
      <div style={{padding:"0px"}}>
        {ReactString}{ReactNumber}
      </div>
    )
  }  
}

PropsRequired.protoTypes={
  ReactString: datatype.isRequired,
}


export default PropsRequired;