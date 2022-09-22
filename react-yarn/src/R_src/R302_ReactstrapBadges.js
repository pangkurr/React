//Reactstrap Badges

import React,{Component} from "react";
import {Badge,Button} from "reactstrap";

class ReactstrapBadges extends Component{
  render(){
    return(
      <div>
        <h1>PRODUCT NAME<Badge color="secondary">hit</Badge></h1>
        <Button color="light" outline>
          Accessor <Badge color="dark">4</Badge>
        </Button>
        <Badge color="danger" pill>pill</Badge>
        <Badge href="http://example.com" color="light">GoLink</Badge>
      </div>
    )
  }
}

export default ReactstrapBadges;