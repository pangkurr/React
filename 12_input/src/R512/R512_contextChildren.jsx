import React from "react";
import { Consumer } from "./R512_ContextApi";

class contextChildren extends React.Component{
  render(){
    return(
        <Consumer>
          {(contextValue)=>(
            <button onClick={(e)=>contextValue.setStateFunc("react")}>
              {contextValue.name}_button
            </button>
          )}
        </Consumer>
    );
  }
}

export default contextChildren;