import React from 'react';
import './style.css'

class GoogAdd extends React.Component{
render(){
    const add = require('./img/add-one.png')
    return(
        <div className ="container  justify-content-center">
            <div className="row">
                <div className ="col-md-12 mt-5 ml-4">
                   <img src ={add} alt="add"/>

                </div>

            </div>

        </div>
    )
}
}

export default GoogAdd;