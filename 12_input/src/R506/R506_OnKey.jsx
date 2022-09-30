import React,{Component} from "react";

class ReactOnKey extends Component{
  OnKey(event,e){
    var val = e.target.value;
    console.log("event : "+event + ", value: "+ val);
  }

  render(){
    return(
      <>
        onKeyDown :{" "}
        <input type="text" onKeyDown={(e)=>this.OnKey("onKeyDown",e)}/>
        <br/>
        onKeyPress :{" "}
        <input type="text" onKeyPress={(e)=>this.OnKey("onKeyPress",e)}/>
        <br/>
        onKeyUp :{" "}
        <input type="text" onKeyUp={(e)=>this.OnKey("onKeyUp",e)}/>
      </>
    )
  }
}

export default ReactOnKey;