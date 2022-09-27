import React, {Component} from 'react';

class FetchPost extends Component{
  componentDidMount = async ()=>{
    const responce = await fetch('http://date.jsontest.com/',{
      method:'POST', //POST 방식 통신
      headers:{
        'Content-Type':'application/json',
      },
      body: {a:"react",b:200},
    });
    const body = await responce.json();
    alert(body.date);
  }

  render(){
    return(
      <h1>fetch post</h1>
    )
  }
}

export default FetchPost;