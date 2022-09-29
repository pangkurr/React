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