import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RouterLink from './config/Router';
import {connect} from 'react-redux';
import {set_data} from './store/action';
class App extends React.Component{
  render(){
    let user = this.props.currentuser
    console.log("this porpos ===>",this.props)
    return(
      <>
      <RouterLink/>
    <h1><img src={user.pics} alt={user.name}/></h1>
      
      
      </>
    )
  }
}
const mapStateToProps = (state) => ({
  currentuser: state.currentuser,
  
})
// const mapDispatchToProps = (dispatch) => ({
//   set_data : () => dispatch(set_data)
// })
export default connect(mapStateToProps,null)( App);
