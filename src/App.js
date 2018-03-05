import React from 'react';
import { Header } from "./components/Header";
import { Home } from "./components/Home";


class App extends React.Component {


  constructor () {
    super();
    this.state = {
      homeLink: 0,
      results: 0
    }
  }


  changeLink (newLink) {
    this.setState({
      homeLink: newLink
    })
  }

  results (newResaults) {
    this.setState({
      results: newResaults
    })
  }
  


  onGreet() {
    alert("greeeety")
  }


  render() {   

    return (
      <div className = "container ">
        <div className = "row">
          <div className = "col-xs-10 col-xs-offset-1">
            <Header homeLink = {this.state.homeLink}/>       
          </div>
          <div className = "col-xs-10 col-xs-offset-1">
          <Header results = {this.state.results}/>       
          </div>
        </div>


        <div className = "row">
          <div className="col-xs-10 col-xs-offset-1">
              <Home 
                  results = {this.results.bind(this)}
                  changeLink = {this.changeLink.bind(this)}
                  homeLink = {this.state.homeLink}
                  initialLinkName = {this.state.homeLink}
                >

              </Home>
                                       
        </div>
        </div>
      </div>
    )
  }
}



export default App;