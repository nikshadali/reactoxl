import React from 'react';
import {connect} from 'react-redux';



import {Link} from 'react-router-dom';


class Faceimg extends React.Component{
    render(){
        let user = this.props.currentuser

        return(
           
           
          user.name ? <img src={user.pics} alt={user.name} className="faceimg"/> :
            <Link to ='/Login' className="link-login" data-toggle="modal" data-target="#myModal" >Login</Link>
       
       
        )
    }
}
const mapStateToProps = (state) => ({
    currentuser:state.currentuser

})
export default connect(mapStateToProps,null)(Faceimg);