//props
//props는 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달할 때 사용
//props를 전달받은 자식 컴포터넌트에서는 데이터 수정 불가
// 데이터 변경을 위해서 컴포넌트 내부에서만 사용하는 변수에 값을 넣어서 사용
import React, {Component} from 'react';

class Props extends Component{
  render(){
    let props_value = this.props.props_val;
    props_value += ' from App.js';
    return(
      <div>{props_value}</div>
    )
  }
}

export default Props;