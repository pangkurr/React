import React,{Component} from "react";

class ReactMouseOver extends Component{
  MouseOver(tag){
    console.log("TAG : " + tag);
  }

  render(){
    return(
      <>
        <div onMouseOver={(e)=>this.MouseOver("div")}>
          <h3>DIV onMouseOver</h3>
        </div>
        <input type="text" onMouseOver={(e)=>this.MouseOver("input")}/>
        <select onMouseOver={(e)=>this.MouseOver("Select")}>
          <option value="react">react</option>  
          <option value="200">200</option>  
        </select> 
      </>
    )
  }
}

export default ReactMouseOver;