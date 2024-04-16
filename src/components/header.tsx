import { NavBar } from "./navBar"

export const Header=()=>{
    return(
        <div id="main">
            <NavBar />
            <div className="name">
                <h1> <span>Servicio integral</span> Reparamos tu pc y celular</h1>
                <p className="details">Ofrecemos un sistema online y app de escritorio</p>
                <a href="#" className="cv-btn">Demo</a>
            </div>
        </div>
    )
}