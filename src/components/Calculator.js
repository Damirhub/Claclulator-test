import React from "react";

import './Calculator.css';

export class Calculator extends React.Component {

constructor(props) {
  super()
  this.state = {
    changed: "",
    memo : ''
  }
}

  onDisplay(){
    this.props.changedValue(this.state.changed)
  }

  onHandleChange(event) {
    this.setState({
      changed : this.state.changed + event.target.value 
      }, () =>  { this.onDisplay(); 
    })
  }

  onDisplayRez(){
    this.props.results(this.state.memo)
  }

  operation(event) {

    switch (event.target.value) {

      case ('+') : 
        this.addition();
      break;

      case ('-') :
        this.deduction();
      break;

      case ('*') :
        this.multiply();
      break;
        
      case ('/') :
        this.division();
      break;

      default : null;
       break;
    }
  }


  addition() {
        const addedNumber =  Number(this.state.memo) + Number(this.state.changed)  
        this.setState ({
          memo : addedNumber,
          changed: ' '
        }, 
        () => this.resulted() )         
  }

  deduction() {
      if( this.state.memo !== ''){
        const deductedNumber =  Number(this.state.memo) - Number(this.state.changed)  
        this.setState ({
          memo : deductedNumber,
          changed: ' '
        }, 
        () => this.resulted() )  
        console.log("iz minusa if memo!!!" + this.state.memo)       
      }      
      else {
        const deductedNumber =  Number(this.state.changed)  
        this.setState ({
          memo : deductedNumber,
          changed: ' '
        }, 
        () => this.resulted() )   
        console.log("iz minusa else memo!!!" + this.state.memo )      
     }
  }

  multiply() {
    if( this.state.memo !== 0 && this.state.memo !== '' ){
          const multipliedNumber =  Number(this.state.memo) * Number(this.state.changed)  
         console.log(" Multiplied rez: " + this.state.memo)
          this.setState ({
            memo : multipliedNumber,
            changed: ' '
          }, 
          () => this.resulted() )         
          console.log("times: ", this.state.memo)
        }
  }

  division() {
    if( this.state.memo !== 0 && this.state.memo !== '' && this.state.changed !== '' )
    {
          const devidedNumber =  Number(this.state.memo) / Number(this.state.changed)  
          console.log(" Divided changed: " + this.state.changed)
         console.log(" Divided rez: " + this.state.memo)
          this.setState ({
            memo : devidedNumber,
            changed: ' '
          }, 
          () => this.resulted() )         
          console.log("Divided memo: ", this.state.memo)
      }
  }


  resulted = () => {
    const memo =  this.state.memo 
    this.setState ({ 
      memo : memo,
    },  
    () => {
      ( this.alerted() ); 
      ( this.onDisplayRez() )
      }
    )
  }
  

  alerted() {
    console.log(" Rezultat memo " + this.state.rezult)
  //  this.onDisplayRez();
  }
  

  
 
  render() {
    
    const btnValues = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

     const buttons = btnValues.map((value) => 
      {
      return <input type = "button" 
      className = "btn btn-primary btns" 
      value = {value}
      onClick = { (event) => this.onHandleChange(event)} 
      />
      }
    )

    return(
      <div>
  
          <div className = "btns">{buttons[7]}</div>
          <div className = "btns">{buttons[8]}</div>
          <div className = "btns">{buttons[9]}</div>          
          <input type = 'button'
           value = {'+'}
           className = "btn btn-danger btns" 
           onClick = { (event) =>  this.operation(event) }
           />
          <br />

          <div className = "btns">{buttons[4]}</div>
          <div className = "btns">{buttons[5]}</div>
          <div className = "btns">{buttons[6]}</div>
          <input type = 'button'
           value = {'-'}
           className = "btn btn-danger btns" 
           onClick = { (event) =>  this.operation(event) }
           />
          <br />

          <div className = "btns">{buttons[1]}</div>
          <div className = "btns">{buttons[2]}</div>
          <div className = "btns">{buttons[3]}</div>
          <input type = 'button'
           value = {'*'}
           className = "btn btn-danger btns" 
           onClick = { (event) =>  this.operation(event) }
           />
          <br />

          <div className = "btns">{buttons[0]}</div>
          <input type = "button" 
           className = "btn btn-warning btns" 
           value = {'.'}
           onClick = { (event) => this.onHandleChange(event)} 
           />

          <div className = "btn btn-success btns"
          onClick = { () =>  this.alerted() }
          >=</div>


          <input type = 'button'
           value = {'/'}
           className = "btn btn-danger btns" 
           onClick = { (event) =>  this.operation(event) }
           />
          <br />
                
      </div>           
      )
    }

}

