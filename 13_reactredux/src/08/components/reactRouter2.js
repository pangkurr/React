import React,{Component} from "react";
import {Link} from 'react-router-dom';

class reactRouter2 extends Component{
  render(){
    return(
      <>
        <h1>path='/r2'</h1>
        <h3>reactRouter 페이지 2</h3>
        <Link to={'/'}>Go reactRouter1</Link>
      </>
    );
  }
}

export default reactRouter2;