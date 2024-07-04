import UserClass from "./UserClass.js";
import React from "react";

class About extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <div>
       <h1>About Us</h1>
       <h2>This is food delivery app by react</h2>
       <UserClass name={"Ani"} location={"hyderabad"}/>
      </div>
    );
  }
}

export default About;