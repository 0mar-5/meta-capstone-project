import React ,{useState} from "react";
import logo from "./img/Logo.svg";
import styles from "../styles/Nav.module.css";
import icon from "./img/icon _hamburger menu.svg";
import {NavLink} from "react-router-dom";

const Nav = ()=>{
  const [openMenu , setOpenMenu] = useState(false);
  const toggleMenu = () =>{
    setOpenMenu(!openMenu);
  };
return(    <nav className={`${styles.nav} ${openMenu && styles.open }` }>
<img className={styles.logo} src={logo} alt = "logo" />
<img className={styles.menu_icon} src={icon} alt = "icon" onClick={toggleMenu}/>

          <ul className={`${styles.navMenu} ${openMenu && styles.visible }`}>
            <>
            <li><NavLink  to="/" >Home</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/menu">menu</NavLink></li>
            <li><NavLink  to="/reservations">reservations</NavLink></li>
            <li><NavLink to="/order-online">order online</NavLink></li>
            <li><NavLink to="/login">login</NavLink></li>
            </>
          </ul>


    </nav>)
};

export default Nav ;