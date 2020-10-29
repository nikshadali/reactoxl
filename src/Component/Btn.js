import React from 'react';
import Login from './Login';

class Btn extends React.Component{
  render(){
    
    return(

        <button className={this.props.class}>{this.props.name}</button>
    )
  }
}

export default Btn;