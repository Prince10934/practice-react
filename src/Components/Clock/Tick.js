import React, { Component } from "react";

class Tick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "Hello World",
      date: new Date(),
    };
  }
  componentDidMount(){
      this.intervalId=setInterval(
          ()=>this.tick(),
          1000
      )
  }
  tick(){
      this.setState(
          {
              ...this.state,
              date:new Date()
              
          }
      )
  }
  componentWillUnmount(){
      clearInterval(this.intervalId);
  }
  render() {
    return (
      <>
        {/* <h1>{this.props.heading}</h1> */}
        <h1>{this.state.heading}</h1>
        {/* <h2>Time is :- {this.props.date.toLocaleTimeString()}</h2> */}
        <h2>Time is :- {this.state.date.toLocaleTimeString()}</h2>
      </>
    );
  }
}
export default Tick;
