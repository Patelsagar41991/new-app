import React, { Component } from 'react'; 

  
class Time extends Component { 

    constructor(props){
        super(props);
        this.state={
            time:new Date()
        }
    }
    tick=()=>{
        this.setState({
            time: new Date()
        })
    }
    componentDidMount() {
        this.time = setInterval(
          () => this.tick(),
          1000
        );
      }
      componentDidUpdate=(prevpros,prevstate)=>{
          if(this.state.time !== prevstate.time){
              console.log("component Did Update");
          }
      }

      componentWillUnmount() {
        clearInterval(this.timerID);
      }

  
  render() { 

    return ( 

      <div > 

        <p>{this.state.time.toLocaleTimeString()}</p> 

      </div> 

    ); 

  } 
} 

  

export default Time;