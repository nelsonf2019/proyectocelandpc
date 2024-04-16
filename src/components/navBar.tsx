import { useState } from "react";
import logo from "../images/logo.png";


export const NavBar =()=>{

    const [nav, setNav] = useState(false)

    const changeBackGround = ()=>{
        if(window.scrollY >= 50){
            setNav(true)
        }else{
            setNav(false)
        }
    }

    window.addEventListener("scroll", changeBackGround)

    return(
        <nav className={nav ? "nav active" : "nav"}>
            <a href="#" className="logo">
                <img src={logo} alt=""/>
            </a>
            <input type="checkbox" className="menu-btn" id="menu-btn"/>
            <label className="menu-icon" htmlFor="menu-btn">
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li> <a href="#" className="active">Inicio</a></li>
                <li> <a href="#features">Proyectos</a></li>
                <li> <a href="#about">acerca de</a></li>
                <li> <a href="#contact">Contacto</a></li>
                <li> <a href="#">Descarga</a></li>
            </ul>
        </nav>
      
    )
}