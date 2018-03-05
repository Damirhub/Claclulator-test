import React from "react";

import './Home.css';


export class Home extends React.Component {

constructor(props) {
  super()
  this.state = {
    changed: "",
    memo : '',
    rezult: '',
    flip: true
  }
}

  onDisplay(){
    this.props.changeLink(this.state.changed)
  }

  onDisplayRez(){
     this.props.results(this.state.rezult)
   }

  onHandleChange(event) {
    this.setState({
      changed : this.state.changed + event.target.value 
      }, () =>  { this.onDisplay(); 
    })
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
        const addedNumber =  Number(this.state.rezult) + Number(this.state.changed)  
        this.setState ({
          memo : addedNumber,
          changed: ' '
        }, 
        () => this.resulted() )         
  }

  deduction() {
      if( this.state.rezult !== ''){
        const deductedNumber =  Number(this.state.rezult) - Number(this.state.changed)  
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
    if( this.state.rezult !== 0 && this.state.rezult !== '' ){
          const multipliedNumber =  Number(this.state.rezult) * Number(this.state.changed)  
         console.log(" Multiplied rez: " + this.state.rezult)
          this.setState ({
            memo : multipliedNumber,
            changed: ' '
          }, 
          () => this.resulted() )         
          console.log("times: ", this.state.memo)
        }
  }

  division() {
    if( this.state.rezult !== 0 && this.state.rezult !== '' && this.state.changed !== '' )
    {
          const devidedNumber =  Number(this.state.rezult) / Number(this.state.changed)  
          console.log(" Divided changed: " + this.state.changed)
         console.log(" Divided rez: " + this.state.rezult)
          this.setState ({
            memo : devidedNumber,
            changed: ' '
          }, 
          () => this.resulted() )         
          console.log("Divided memo: ", this.state.memo)
      }
  }


  resulted = () => {
    const rezult =  this.state.memo 
    this.setState ({ 
      rezult : rezult,
      flip: true,
      status :rezult
    },  
    //() => this.onHandleChange(this.state.memo)) 
    () => this.alerted(),   
    () => this.onDisplayRez())
  }
  

  alerted() {
    console.log(" Rezultat memo " + this.state.rezult)
    this.onDisplayRez();
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

          <div className = "btn btn-success btns">=</div>
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

