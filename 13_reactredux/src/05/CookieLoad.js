import React,{Component} from "react";
import cookie from 'react-cookies';

class cookieLoad extends Component {
  componentDidMount(){
    const expires = new Date();
    expires.setMinutes(expires.getMinutes()+60);
    cookie.save('userid','react-cookie',{
      path: '/',
      expires,
      // secure: true,
      // httpOnly: true
    });
    setTimeout(function(){
      // load 함수 : 쿠키에 key로 접근하여 value를 가져오는 함수
      alert(cookie.load('userid'));
    },1000);
  }

  render(){
    return(
      <>
        <h3>react-cookies Load</h3>
      </>
    );
  }
};

export default cookieLoad;