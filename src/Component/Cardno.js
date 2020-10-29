import React from "react";
import "./style.css";


class Cardno extends React.Component{
    render(){
        console.log(this.props)
        
        return(
            <div className="card" style={{width: '16rem'}}>
            <img src={this.props.imgsrc} className="card-img-top faiz b-block" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text">{this.props.discrip}</p>
              
            </div>
          </div>

        )
    }
}

export default Cardno;