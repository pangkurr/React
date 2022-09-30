import React,{Component} from "react";

class ReactonClick extends Component{
  buttonClick=(param)=>{
    if(typeof param !="string") param="a 클릭";
    //console.log('param: '+param);
    alert("param: "+param);
  };

  render(){
    return(
      <>
        <button onClick={(e)=>this.buttonClick("버튼 클릭")}>버튼 클릭</button>
        <div onClick={(e)=>this.buttonClick("div클릭")}>div 클릭</div>
        <a href="javascript:;" onClick={this.buttonClick}>a클릭</a>
      </>
    )
  }
}

export default ReactonClick;