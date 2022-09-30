//[components] 디렉터리에 저장
import React,{Component} from "react";
import {Route,Routes} from 'react-router-dom';
import R1 from './reactRouter1';
import R2 from './reactRouter2';

//CSS
import '../css/new.css';

//header
import HeaderAdmin from './Header/Header admin';

//footer
import Footer from './Footer/Footer';

class App extends Component{
  render(){
    return(
      <div className="App">
        <HeaderAdmin/>
        <Routes>
          <Route exact path="/" element={<R1/>}/>
          <Route exact path="/r2" element={<R2/>}/>
        </Routes>
        <Footer/>
      </div>
    );
  }
}

export default App;