import React from "react";
import NavBar from "../navbar/navbar";
import "./cercania.css"
import Footer from "../footer/footer"
import { Link } from "react-router-dom";

export default function Cercania({ dimension }) {

    return (<div>
        <NavBar dimension={dimension} />
        <div className="Historia-box">
            <div className="cercania-box"><h2 style={{ display: "flex", justifyContent: "center", textShadow: "1px 1px 2px black" }}>Cercanía</h2></div>
            <div>
                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>

                    <h5 style={dimension.width > 900 ? { width: "40%" } : { width: "90%" }}>Establece el lugar desde el cual hacemos política y para quién, dónde debemos ponernos en el lugar del otro.
                        En el siglo XX la política era en sentido verticalista, donde lo que se buscaba era liderar las masas, con un rasgo paternalista que se observa en las masas con la sumisión y admiración hacia sus líderes. Las políticas del siglo XXI, se caracterizan por ser horizontales, caracterizadas por la cercanía, el diálogo, pero por sobre todo la escucha. Entendiendo lo que al otro le pasa, sintiendo lo que el otro siente. Cuando deseamos ser cercanos debemos serlo primero con nosotros mismos, siendo auténticos, ya que es lo que nos permitirá lograr la empatía y la comunicación  en el plano emocional, aliando nuestro sentir, con el decir y el hacer, y permitiéndonos ser vulnerables, ya que nadie espera la perfección, se espera que seamos humanos, para de esta manera ser más fuerte y confiable para todos.</h5>
                </div>
            </div>
            <Link to="/sumate">
                <button className="sumate-btn">SUMATE</button>
            </Link>
        </div>

        <div style={{ height: "100%", display: "flex", alignItems: "flex-end" }}>

            <Footer dimension={dimension} ></Footer>
        </div>

    </div >)
}