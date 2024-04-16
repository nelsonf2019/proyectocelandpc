import logo from "../images/logo.png"

export const Footer =()=>{
    return(
       <footer className="pie-pagina">
            <div className="grupo-1">
                <div className="box">
                    <figure >
                        <a href="#">
                            <img  src={logo}/>
                        </a>
                    </figure >
                </div>
                <div className="box">
                    <h2>Sobre nosotros</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat ratione</p> 
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat ratione</p> 
                </div>
                <div className="box">
                    <h2>Siguenos</h2>
                    <div className="red-social">
                        <a href="#" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-instagram"></a>
                        <a href="#" className="fa fa-twitter"></a>
                        <a href="#" className="fa fa-youtube"></a>
                    </div>
                </div>
            </div>
            <div className="grupo-2">
                <small>&copy; 2024 <b>Nelson Fercher</b>-Desarrollo de app web -Todos los Derechos Reservados </small>
            </div>
       </footer>
    )
}