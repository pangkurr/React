import React, {Component} from 'react';
import Swal from 'sweetalert2';


class Sweetalert2Basic extends Component{
  componentDidMount(){
    //Swal.fire('1.SweetAlert') //비동기. 다음 코드를 실행시킨다.
    //alert('2.alert()') //동기. 바로 실행된다.
    Swal.fire({
      title:'1.SweetAlert',
      icon:"success",
      position:'top-end',
    })
    .then(result=>{alert('2. result.value : '+result.value)});
    //프로미스의 then 함수를 사용하여 결과값 리턴 후 alert()실행
  }
  //프로미스 : 비동기 함수를 동기적으로 사용할 수 있는 개념
  //then() : 이전 함수가 완료되면 실행

  render(){
    return(
        <h4>1이 실행되고 2가 실행되는 then</h4>
    )
  }
}

export default Sweetalert2Basic;