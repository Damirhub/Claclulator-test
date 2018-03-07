import React from 'react';
import { Display } from "./components/Display";
import { Calculator } from "./components/Calculator";


class App extends React.Component {


  constructor () {
    super();
    this.state = {
      homeValue: 0,
      results: 0
    }
  }

  changedValue (newValue) {
    this.setState({
      homeValue: newValue
    })
  }

  results (newResaults) {
    this.setState({
      results: newResaults
    })
  }
  

  render() {   

    return (
      <div className = "container ">
        <div className = "row">
          <div className = "col-xs-10 col-xs-offset-1">
            <Display homeValue = {this.state.homeValue}/>       
          </div>
          <div className = "col-xs-10 col-xs-offset-1">
          <Display results = {this.state.results}/>       
          </div>
        </div>


        <div className = "row">
          <div className="col-xs-10 col-xs-offset-1">
              <Calculator 
                  results = {this.results.bind(this)}
                  changedValue = {this.changedValue.bind(this)}    
                >
              </Calculator>                              
        </div>
        </div>
      </div>
    )
  }
}



export default App;