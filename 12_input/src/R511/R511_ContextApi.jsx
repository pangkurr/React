import React from "react";
import Children from "./R511_contextChildren"

const { Provider, Consumer } = React.createContext();
export { Consumer };

class ContextApi extends React.Component{
  render(){
    return(
        <Provider value="React">
          <Children />
        </Provider>
    );
  }
}

export default ContextApi;