//Reactstrap Carousel 사용
import React,{Component} from "react";
import { UncontrolledCarousel } from "reactstrap";

const items=[
  {
    src:'https://bit.ly/3DENeRU',
    altText:'슬라이드1 이미지 대체 문구',
    caption:'슬라이드1 설명',
    header:'슬라이드1 제목'
  },
  {
    src:'https://bit.ly/3LwwluK',
    altText:'슬라이드2 이미지 대체 문구',
    caption:'슬라이드2 설명',
    header:'슬라이드2 제목'
  },
  {
    src:'https://bit.ly/3SdvEJ6',
    altText:'슬라이드3 이미지 대체 문구',
    caption:'슬라이드3 설명',
    header:'슬라이드3 제목'
  },
];

class ReactstrapCarousel extends Component{
  render(){
    return(
      <UncontrolledCarousel items={items} />
    )
  }
}

export default ReactstrapCarousel;