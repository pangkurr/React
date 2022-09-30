//[components] 디렉터리에 저장
import React,{Component} from "react";
import {Route,Routes} from 'react-router-dom';

//CSS
import '../css/new.css';

//header
import HeaderAdmin from './Header/Header admin';

//footer
import Footer from './Footer/Footer';

//login
import LoginForm from './LoginForm'

class App extends Component{
  render(){
    return(
      <div className="App">
        <HeaderAdmin/>
        <Routes>
          <Route exact path="/" element={<LoginForm/>}/>
        </Routes>
        <Footer/>
      </div>
    );
  }
}

export default App;