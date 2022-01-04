import React from "react";
import NavBar from "../navbar/navbar";
import "./positivismo.css"
import Footer from "../footer/footer"
import { Link } from "react-router-dom";

export default function Positivismo({ dimension }) {

    return (<div>
        <NavBar dimension={dimension} />
        <div className="Historia-box">
            <div className="positivismo-box"><h2 style={{ display: "flex", justifyContent: "center", textShadow: "1px 1px 2px black" }}>Positivismo</h2></div>
            <div>
                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>

                    <h5 style={dimension.width > 900 ? { width: "40%" } : { width: "90%" }}> La positividad es la forma en la caramos la vida, es el hacer transformador, enfocados siempre en lo que hacemos a hacer, sintiendo una gran atracción por el presente, sin negar el problema, las dificultades o límites. Donde reconocemos que aquello que no podemos evitar podemos darle una respuesta. Entendiendo que somos responsables de nuestro futuro.</h5>
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