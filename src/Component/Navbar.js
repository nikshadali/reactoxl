import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
class Navbar extends React.Component{
    render(){
        return(

            <div className ="menubar boxshadow">  
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="col-md-3 text-right mr-3 pt-1">
            <Link to ='' className ="category">ALL CATEGORIES</Link>
            <button className="bg-none search-reg">
          <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path></svg>
          </button>
            </div>
            
          <div className ="col-md-7 mt-2 text-left ">
              <ul className="navbar-nav menu">
                <li className="nav-item active">

                <Link to ='/' className ="category ">Home</Link>
                </li>
                <li className="nav-item">
                <Link to ='/' className ="category pl-3">Home</Link>
                </li>
                <li className="nav-item">
                <Link to ='/' className ="category pl-3">Home</Link>
                </li>
                <li className="nav-item">
                <Link to ='/' className ="category pl-3">Home</Link>
                </li>
              </ul>
            </div>
          </nav></div>
           

        )
    }
}

export default Navbar;