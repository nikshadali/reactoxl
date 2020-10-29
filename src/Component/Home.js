import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Headerimg from './Hearderimg'
import Card from './Card';
import GoogAdd from './GooglAdd';
import Main from "./Main";
import Carosuel from './Carosuel';
import Fresh from './Fresh';
import Firstfooter from './Firstfooter';
import Lfooter from './Lfooter';
class Home extends React.Component{
    render(){
        return(
            <>
              <Header></Header> 
               <Navbar/>
               <Headerimg/>
               <GoogAdd/>
               <Carosuel/>
               <Fresh/>
               <Main/>
               <Main/>
               <Main/>
               <Firstfooter/>
               <Lfooter/>

               
                </>
        )
    }
}

export default Home;