import React, {Component} from 'react';

class Rmap extends Component{

  componentDidMount(){
    var Map_Arr=[4,2,5,6];
    let Map_newArr=Map_Arr.map(x => x);
    console.log('Map_newArr: ['+ Map_newArr+']');

    let Map_multiArr = Map_Arr.map( x=>x*2 );
    console.log('Map_multiArr: ['+ Map_multiArr+']');

    var ObjArr=[
      {key:'react',value:'200'},
      {key:'리액트',value:'TwoHundread'}
    ];
    let Map_objArr=ObjArr.map((obj,index)=>{
      console.log( (index+3) + '.obj'+JSON.stringify(obj));
      var Obj={};
      Obj[obj.key]=obj.value;
      return Obj;
    });
    console.log('Map_objArr: '+JSON.stringify(Map_objArr));
  }
  
  render(){
    return(
      <h2>MAP</h2>
    )
  }
}

export default Rmap;