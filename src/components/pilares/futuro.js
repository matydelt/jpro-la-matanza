import React from "react";
import NavBar from "../navbar/navbar";
import "./futuro.css"
import Footer from "../footer/footer"
import { Link } from "react-router-dom";

export default function Futuro({ dimension }) {

    return (<div>
        <NavBar dimension={dimension} />
        <div className="Historia-box">
            <div className="futuro-box"><h2 style={{ display: "flex", justifyContent: "center", textShadow: "1px 1px 2px black" }}>Futuro</h2></div>
            <div>
                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>

                    <h5 style={dimension.width > 900 ? { width: "40%" } : { width: "90%" }}>La visión del partido, cuando hablamos del futuro es a partir de este instante en adelante, es cuando procuramos vivir el presente con total plenitud para poder así construir el futuro deseado. Asumiendo nuestra responsabilidad, con un rol activo como protagonistas, donde buscamos transformaciones que estén a nuestro alcance, es una visión de cómo queremos vivir, de como poder realizarnos y ser felices.</h5>
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