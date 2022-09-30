import React,{Component} from "react";

class ReactMouseMove extends Component{
  MouseMove(tag){
    console.log("TAG : " + tag);
  }

  render(){
    return(
      <>
        <div onMouseMove={(e)=>this.MouseMove("div")}>
          <h3>DIV onMouseMove</h3>
        </div>
        <input type="text" onMouseMove={(e)=>this.MouseMove("input")}/>
        <select onMouseMove={(e)=>this.MouseMove("Select")}>
          <option value="react">react</option>  
          <option value="200">200</option>  
        </select> 
      </>
    )
  }
}

export default ReactMouseMove;