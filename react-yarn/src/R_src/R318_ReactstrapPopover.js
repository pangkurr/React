//Reactstrap Popover 사용
import React,{Component} from "react";
import { Button, UncontrolledPopover, PopoverHeader,PopoverBody} from "reactstrap";

class ReactstrapPopover extends Component{
  render(){
    return(
      <>
        <Button id="Popver_id" type="button">
          Popover button
        </Button>
        <UncontrolledPopover placement="right" target="Popover_id">
          <PopoverHeader>React</PopoverHeader>
          <PopoverBody>
            Aenean id magna id risus congue ornare. Vestibulum sed diam et mi pulvinar facilisis sed eu risus.
          </PopoverBody>
        </UncontrolledPopover>
      </>
    )
  }
}

export default ReactstrapPopover;