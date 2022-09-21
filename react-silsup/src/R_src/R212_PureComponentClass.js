// PureComponent 사용(class형 컴포넌트)
import React,{Component} from "react";

class PureComponentClass extends Component{
  constructor(props){
    super(props);
    this.state={
      StateString:'react',
      StateArrayObj:['react',{react:'200'}]
    }
  }

  buttonClick = (type)=>{
    if(type ==="String"){
      this.setState({StateString:'react'});
    }else{
      this.setState({StateArrayObj: ['react',{react:'200'}]});
    }
  }

  render(){
    console.log('render()실행');
    return(
      <div>
        <button onClick={e => this.buttonClick('String')}>문자열 변경</button>
        <button onClick={e => this.buttonClick('ArrayOjbect')}>객체 배열 변경</button>
      </div>
    )
  }
}

export default PureComponentClass;