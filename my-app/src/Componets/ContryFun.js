import React, { useState } from 'react'

    function ContryFun(props){
        const [contryName,setCountryName]=useState('India');
        
        const chageContry = () =>{
            setCountryName('us');
        }
    

    return (
      <div>
          <p>{contryName}</p>
          <button onClick={()=>chageContry()}>chage contry</button>
      </div>
    );
  }
export default ContryFun;
