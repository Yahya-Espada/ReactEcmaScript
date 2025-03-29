import React,{ Component } from "react";

export default class Mounting extends React.Component {
   //methode 1 fil mounting
  constructor(props) {
    super(props);
    console.log("je suis le constructeur");
    this.state = { likes: 0 };
  }
  //methode 2
  static getDerivedStateFromProps(props, state) {
    console.log(props.name);
    console.log("getting props and init states !!!");
    return null;
  }
  //methode 3
  componentDidMount() {
    console.log("component did mount !!!");
  }
 
//methode 4 render()
  render() {
    return (
      <div>
        {console.log("rendering")}
        <p>Like : {this.state.likes}</p>
        
      </div>
    );
  }
   
}