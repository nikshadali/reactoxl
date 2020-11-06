import React from 'react';


class Btn extends React.Component{
  render(){
    
    return(

        <button className={this.props.class} onClick={this.props.Click}>{this.props.name}</button>
    )
  }
}

export default Btn;