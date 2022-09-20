// ./src/Rejquery.js
import React,{Component} from "react";
import $ from 'jquery';

class Rejquery extends Component{

  input_alert = (e)=>{
    var input_val = $('#inputId').val();
    alert(input_val);
  }

  render(){
    return(
      <div>
        <h2>jquery 사용</h2>
        <input name="inputName" id="inputId" />
          <button id="buttonId" onClick={e=>this.input_alert(e)}>jQuery Button</button>
      </div>
    )
  }
}

export default Rejquery;