import React, {Component} from 'react';
import Swal from 'sweetalert2';


class Sweetalert2Confirm extends Component{
  deleteAlert=(e)=>{
    Swal.fire({
      title:'정말 삭제할거야?',
      icon:'question',
      showCancelButton:true,
      confirmButtonColor:"#4B088A",
      cancelButtonColor:"#01df01",
      confirmButtonText:"예",
      cancelButtonText: '아니오'
    }).then((result)=>{
      if(result.value){
        document.getElementById('deletedId').remove();
        Swal.fire(
          'Deleted',
          'sweetalert2 삭제완료',
          'success'
        )
      }
    })
  }

  render(){
    return(
      <>
        <h1 id="deletedId">sweetalert2</h1>
        <button onClick={e=>this.deleteAlert()}>삭제</button>
      </>
    )
  }
}

export default Sweetalert2Confirm;