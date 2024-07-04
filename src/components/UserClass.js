import React from "react";

class UserClass extends React.Component {
  constructor(props){
  super(props);
  console.log(props);
  this.state = {
    userInfo:{
      name:"Dummy",
      location:"default",
    },
  };
  }
  async componentDidMount(){
    const data= await fetch("https://api.github.com/users/AnilaMacha");
    const json= await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  render() {
    const {name, location, avatar_url} = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h1>name:{name}</h1>
        <h3>location:{location}</h3>

      </div>
    )
  }
}

export default UserClass;