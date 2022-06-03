import React, { Component } from 'react'

 class Country extends Component {
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
      <div><div>
      <p>{this.state.countryName}</p>
      <button onClick={()=>this.changeCountry()}>change Country</button>  
  </div>
</div>
    )
  }
}
export default Country