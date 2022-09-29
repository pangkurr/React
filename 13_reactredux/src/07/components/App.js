//[components] 디렉터리에 저장
import React,{Component} from "react";
import {Route,Routes} from 'react-router-dom';
import R1 from './reactRouter1';
import R2 from './reactRouter2';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Routes>
          <Route exact path="/" element={<R1/>}/>
          <Route exact path="/r2" element={<R2/>}/>
        </Routes>

      {/* React Router v6 이전 방식 */}
      {/* {<Route exact path="/" component={reactRouter1}/>
          <Route exact path="/r2" component={reactRouter2}/>} */}
      </div>
    );
  }
}

export default App;