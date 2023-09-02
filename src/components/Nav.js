import React from "react";
import Logo from "./Logo";
const Nav = ()=>{

return(    <nav>
    <Logo/>
          <ul>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>menu</a></li>
            <li><a>reservations</a></li>
            <li><a>order online</a></li>
            <li><a>login</a></li>
          </ul>
           
    </nav>)
};

export default Nav ;