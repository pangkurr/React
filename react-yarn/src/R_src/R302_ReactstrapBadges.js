//Reactstrap Badges

import React,{Component} from "react";
import {Badge,Button} from "reactstrap";
//Badge 패키지는 부모 요소에 추가로 특정 문자열이나 숫자를 표시할 때 사용한다.

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