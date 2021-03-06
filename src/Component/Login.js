import React from 'react';
import Btn from './Btn';
import {connect} from 'react-redux';
import {facebook_login} from '../store/action';


class Login extends React.Component{
    render(){
      console.log("facebook===>", this.props)
        const nik = require("./img/nik.jpg")
        return(
            <>
            
          <div className="modal-dialog modal-dialog-centered">
            {/* Modal content*/}
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">×</button>
                </div>

              <div className="modal-body head-sec">
                  <img src={nik} alt = "Naikshad" className="mypic"/>
                  <p className="ml-5">Nikshad Ali</p>
             </div>
             <div className="modal-body head-sec">
                  <Btn class=" combine btn-block" name="Countinu with phone"></Btn>
                  <Btn class="facebook combine btn-block" name="Countinu with facebook" Click ={() => this.props.facebook_login()}></Btn>
                  <Btn class="facebook combine btn-block" name="Countinu with google"></Btn>
                  <Btn class="facebook combine btn-block" name="Countinu with email"></Btn>
             </div>
             
             
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
            </>
        )
    }
}
const mapStateToProps = (state) =>({
  user:state.user

})
  

const mapDispatchToProps = (dispatch) =>({
  facebook_login :() => dispatch(facebook_login()),

})

export default connect(mapStateToProps,mapDispatchToProps)(Login);