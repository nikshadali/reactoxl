
import React from "react";
import Card from "./Card";
import Cardno from './Cardno';

class Main extends React.Component{
    render(){
        const led = require("./img/led.jpg")
        const mobile = require("./img/mobile.jpg")
        return(
            
            
            <div className="container">
             <div className="row ">
            
                  
                   <div className ="col-md-2 ">
                  <Cardno imgsrc ={led} title ="Rs. 75000" discrip ="Samsung Led model 32ud580" />
                  </div>
                
                <div className ="col-md-2 ml-40 ">
                <Cardno imgsrc = {mobile} title ="Rs. 25000" discrip ="Oppo Mobile model s6"/>
                </div>
                
                <div className ="col-md-2 ml-40 ">
                <Cardno imgsrc = {mobile}  title ="Rs. 75000" discrip ="Samsung Led model 32ud580"/>
                </div>

                <div className ="col-md-2 ml-40">
                <Cardno imgsrc = {led}  title ="Rs. 75000" discrip ="Samsung Led model 32ud580"/>
                </div>
                
                </div>
                </div>
                
                
           
        
        )
    }
}
export default Main;