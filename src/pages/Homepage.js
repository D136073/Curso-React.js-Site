import React from "react";
import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {
    return(
        <main className="holder">
            <div className="homeimg">
                <img src="public/images/foro.jpg" alt="homeimages" />
            </div>
             <div className="columnas">
                <div className="bienvenidos">
                    <h2>BIENVENIDOS</h2>
                    <p>algun texto descriptivo</p>
                </div>
             </div>
        </main>
       
    )
}
export default HomePage;