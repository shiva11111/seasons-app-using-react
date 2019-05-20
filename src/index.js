import React from "react"
import ReactDom from "react-dom"
import SeasonDisplay from "./seasonDisplay"
import Spinner from "./spinner.js";
//functional components----
// const App =()=>{
//      window.navigator.geolocation.getCurrentPosition(posi =>
//          console.log(posi),
//          err=>console.log(err)
//      )
//     return <h1>hi</h1>;
// }
//end of functional component----

//class based component

class App extends React.Component {
    
    //this is identical to the cnstructor 
    state={lat:null,err:''}

    //componentdidmount  is used to load any data 
    componentDidMount(){
      //updating state always use setState to update
    window.navigator.geolocation.getCurrentPosition(posi =>
      this.setState({lat:posi.coords.latitude}),
      err=> this.setState({...this.state,err:err.message})
  )  
    }

    //render content is used to centralize the content we render it makes the code more dynamic and re usable.the function name can be anything not only renderedcontent 
    renderedContent(){
      if(this.state.lat&&!this.state.err){return <SeasonDisplay lat={this.state.lat} ></SeasonDisplay>}
      if(!this.state.lat&&this.state.err){return <SeasonDisplay err={this.state.err}/>}
      if(!this.state.lat&&!this.state.err){return <Spinner message={"please accept request"} />}
    } 
     
    //if you want to wrap the content rendered you can do it in here
    render(){      
      return(
      <div className="wrapper">
       {this.renderedContent()}
       </div>
      )
    }
}

//end of class based component

ReactDom.render(<App/>,document.querySelector("#root"))
