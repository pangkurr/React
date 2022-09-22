//Reactstrap Input Group 사용
import React,{Component} from "react";
import { InputGroup,InputGroupAddon, InputGroupText, Input, Button } from "reactstrap";

// ReactstrapInputGroup은 reactstrap을 8버전으로 업그레이드하면 볼 수 있다. (아래 명령어 참고)
//npm install --save reactstrap@8
//npm i boostrap@4.6

class ReactstrapInputGroup extends Component{
  render(){
    return(
      <>
      <InputGroup>
        <Input placeholder="userid" />
        <InputGroupAddon addonType="append">
          <InputGroupText>@reactmail.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <Button>버튼</Button>
        </InputGroupAddon>
        <Input />
      </InputGroup>
      </>
    )
  }
}

export default ReactstrapInputGroup;