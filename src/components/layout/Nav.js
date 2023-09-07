import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav id="navegador">
           <div id="navegadordiv">
                <ul id="listanav">
                    <li id="itemlist"><Link to="/">Home</Link></li>
                    <li id="itemlist"><Link to="/nosotros">Nosotros</Link></li>
                    <li id="itemlist"><Link to="/novedades">Novedades</Link></li>
                    <li id="itemlist"><Link to="/contacto">Contacto</Link></li>
                </ul>
            </div> 
        </nav>       
    )
} 
export default Nav;