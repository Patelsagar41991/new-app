import React, { Component } from 'react'

 class Containers extends Component {
    constructor(props){
        super(props);

        this.state={
            countryName:'india'
        }
    }
    changeCountry=()=>{
        this.setState({
            countryName:'us'
        });
    }
    render() {
        return (
            
          <div>
              <p>{this.state.countryName}</p>
              <button onClick={()=>this.chageCountry()}>change Country</button>
          </div>

        );
      }
    }
    export default Containers;