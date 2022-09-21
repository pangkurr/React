// props를 필수 값으로 사용
import React,{Component} from 'react';
import datatype from 'prop-types';

class PropsRequired extends Component{
  render(){
    let{
      ReactString,
      ReactNumber
    }=this.props //지역변수 선언
    return(
      <div style={{padding:"0px"}}>
        {ReactString}{ReactNumber}
      </div>
    )
  }  
}


//상위컴포넌트에서 `ReactString` 변수를 전달하지 않아 경고메시지 발생
//Props에서 String을 전달하지 않았기 때문에 오류가 발생
PropsRequired.protoTypes={
  ReactString: datatype.isRequired,
}


export default PropsRequired;