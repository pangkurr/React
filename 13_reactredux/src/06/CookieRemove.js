import React,{Component} from "react";
import cookie from 'react-cookies';

class CookieRemove extends Component {
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
      // remove함수 : 웹 브라우저에 남아 있는 쿠키에 key로 접근하여 쿠키 삭제
      cookie.remove('userid',{path:'/'});
    },1000);
    setTimeout(function(){
      alert(cookie.load('userid'));
    },2000);
  }

  render(){
    return(
      <>
        <h3>react-cookies Remove</h3>
      </>
    );
  }
};

export default CookieRemove;