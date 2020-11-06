import React from 'react';
import Cardno from './Cardno';


class Carosuel extends React.Component{
    render(){
        const led = require('./img/led.jpg')
      
        return(
                
            <>
            <div className="container mt-5 ">
                <div className="row">
                  
                    <div className="col-md-12 cro-contair">
                      <h3 className="mt-2 "> More on TV - Video - Audio</h3>
                      
                    <div id="carouselExampleControls" className=" slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
              <div className="row"> 
              
              <div className="col-3 ml-3"><Cardno imgsrc ={led} title ="Rs. 75000" discrip ="Samsung Led model 32ud580"/></div>
              <div className="col-3 ml-3"><Cardno imgsrc ={led} title ="Rs. 75000" discrip ="Samsung Led model 32ud580"/></div>
              <div className="col-3 ml-3"><Cardno imgsrc ={led} title ="Rs. 75000" discrip ="Samsung Led model 32ud580"/></div>
              </div>
           
          </div>
          <div className="carousel-item">
          <div className="row"> 
              
              <div className="col-3 ml-5"><Cardno imgsrc ={led} title ="Rs. 75000" discrip ="Samsung Led model 32ud580"/></div>
              <div className="col-3 ml-3"><Cardno imgsrc ={led} title ="Rs. 75000" discrip ="Samsung Led model 32ud580"/></div>
              <div className="col-3 ml-3"><Cardno imgsrc ={led} title ="Rs. 75000" discrip ="Samsung Led model 32ud580"/></div>
              </div>
          </div>
          
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>

                    </div>


                </div>
            </div>
            </>
        )
    }
}

export default Carosuel;