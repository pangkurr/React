import React,{Component} from "react";
import {Link} from 'react-router-dom';

class reactRouter1 extends Component{
  render(){
    return(
      <>
        <h1>path='/'</h1>
        <h3>reactRouter 페이지 1</h3>
        <Link to={'/r2'}>Go reactRouter2</Link>
      </>
    );
  }
}

export default reactRouter1;