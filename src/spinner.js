import React from "react"

const Spinner=props=>{
   return(
      <div className="ui active  dimmer">
      <div className="ui text loader">{props.message}</div>
    </div>
   )

}

//default props to spinner 
Spinner.defaultProps={
  message:"loading"
}


export default Spinner