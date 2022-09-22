//Reactstrap Card 사용
import React,{Component} from "react";
import {
  Card, CardImg, CardText, CardBody, CardTitle,CardSubtitle,Button
} from 'reactstrap';

class ReactstrapCard extends Component{
  render(){
    return(
      <div>
        <Card>
          <CardImg top height="200px" src="https://bit.ly/3S2TwiC" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card 제목</CardTitle>
            <CardSubtitle>Card 부제목</CardSubtitle>
            <CardText>Card 내용 Lorem ipsum is simply text.</CardText>
            <Button>버튼</Button>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default ReactstrapCard;