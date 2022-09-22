//Reactstrap Fade 사용
import React,{Component} from "react";
import { Button,Fade } from "reactstrap";

class ReactstrapFade extends Component{
  constructor(props){
    super(props);
    this.state={
      fadeInOut:true
    }
  }

  toggle = (e) =>{
    this.setState({fadeInOut: !this.state.fadeInOut});
  }

  render(){
    return(
      <div>
        <Button color="success" onClick={this.toggle}>Fade In</Button>
        <Fade in={this.state.fadeInOut} tag="h1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </Fade>
      </div>
    )
  }
}

export default ReactstrapFade;