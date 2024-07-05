import UserClass from "./UserClass.js";
import React from "react";

class About extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <div>
       
       <UserClass name={"Ani"} location={"hyderabad"}/>
      </div>
    );
  }
}

export default About;