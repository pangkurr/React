import React,{Component} from "react";

class ReactonOut extends Component{
  MouseOut(tag){
    console.log("TAG : " + tag);
  }

  render(){
    return(
      <>
        <div onMouseOut={(e)=>this.MouseOut("div")}>
          <h3>DIV onMouseOut</h3>
        </div>
        <input type="text" onMouseOut={(e)=>this.MouseOut("input")}/>
        <select onMouseOut={(e)=>this.MouseOut("Select")}>
          <option value="react">react</option>  
          <option value="200">200</option>  
        </select> 
      </>
    )
  }
}

export default ReactonOut;