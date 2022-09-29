import React,{Component} from "react";
import cookie from 'react-cookies';

class cookieSave extends Component {
  componentDidMount(){
    const expires = new Date();
    expires.setMinutes(expires.getMinutes()+60);
    cookie.save('userid','react-cookie',{
      path: '/',
      expires,
      // secure: true,
      // httpOnly: true
    });
  }

  render(){
    return(
      <>
        <h3>react-cookies Save</h3>
      </>
    );
  }
};

export default cookieSave;