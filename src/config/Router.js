import React from 'react';
// import {BrowserRouter as Router,Route} from 'react-router-dom';
import {
    BrowserRouter as Router, Route,} from "react-router-dom";
  import Home from '../Component/Home';
  import Login from '../Component/Login';
    
class RouterLink extends React.Component{
    render(){
        return (
            <>
            <Router>
                <Route exact path = "/" component ={Home}/>
                <Route exact path = "/Login" component ={Login}/>
            </Router>
            </>
        )
    }
}

export default RouterLink;