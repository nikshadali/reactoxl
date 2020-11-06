import React from 'react';
import './style.css';
import SearchIcon from '@material-ui/icons/Search';
import Login from './Login';

import {Link} from 'react-router-dom';
import Faceimg from './Faceimg';

class Header extends React.Component{
  
 
    render(){
        return(
          <>
            <nav className="navbar navbar-light bg-light">
                <div className ="col-md-2 pr-2 text-right">
                 <Link  to = '/' className="navbar-brand ">olx</Link>
        </div>
        <div className="col-md-2 ">
          <div className="bg-white b-outline hight-30">
        <form className="form-inline">
        <button className="bg-none search-reg"> 
          <SearchIcon className="mt-1 pl-2 " fontSize="large"></SearchIcon></button>
            
          <input className="form-control mr-sm-2" type="search" placeholder="Pakistan" aria-label="Search" className="search-reg mt-1 pl-2" />
          <button className="bg-none search-reg">
          <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fill-rule="evenodd"><path class="rui-77aaa" d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path></svg>
          </button>
        </form>
        </div>
        </div>
        <div className="col-md-4 ">
        <div className="bg-white b-outline hight-30">
        <input className="form-control mr-sm-2" type="search" placeholder="Finds Cars Mobile Phones and more..." aria-label="Search" className="search-reg mt-1 pl-2 s-width" />
        </div>
        </div>
        <div className="col-md-1 mr-n">
        
        <button className="p-n bg-bl b-outline">
        <SearchIcon className="mt-1 pl-1 color-w" fontSize="large"></SearchIcon>
        </button>
        </div>
        <div className="col-md-3 navlink">
         <Faceimg/>
        
          
          <button className = "btn-sell">+SELL</button>
        </div>
      </nav>
      <div className="modal fade" id="myModal" role="dialog">
        <Login/>
          
        </div>
      </>
        )
    }
}

 


export default Header;