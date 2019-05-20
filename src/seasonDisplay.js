//manually import css file
import "./seasonDisplay.css"
import React from "react"


 // function to get the season
 const Getseason=(month,lat)=>{
    //lat>0 is northern hemisphere
    if(month>2&&month<9)
    {
      return lat>0?"summer":"winter"
    }
    //lat<0 is southern hemishere
    else
    {
      return lat>0?"summer":"winter"
    }

}

const SeasonDisplay =props=>{
    
  //get season from props using above  function 
    const season=Getseason(new Date().getMonth(),props.lat)
    const text=season==="winter"?"it is cold in here":"it is hot in here"
    const iconName=season==="winter"?"snowflake":"sun"
    
    //change the content of the page according to the season
    return <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`} />
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`} />
           </div>
}

export default SeasonDisplay