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
      <div className="border border-black border-solid w-[300px] rounded-lg p-4 m-4 bg-gray-50">
        <img className="w-[100px] rounded-full" src={avatar_url}/>
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Phone: +1 (618)-(698)-(3884)</h2>
        <h3>mail: foodiefantasy@gmail.com</h3>

      </div>
    )
  }
}

export default UserClass;