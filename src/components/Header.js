import React from 'react';

 export class Header extends React.Component {
  render () {
    return (
      <div>
        <br />
        <nav className = " " style = {
            {'width' : 188 , 
              'backgroundColor' : 'yellowgreen',
               'height': 25, 
               }}>
          <div className = "container">
            
              <ul className = "nav navbar-nav">
                <li>{this.props.homeLink}</li>     
                <li>{this.props.results}</li>      
              </ul>
            
          </div>
        </nav>
        </div>
     


    )
  }
}
