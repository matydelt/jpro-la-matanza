import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/footer";
import NavBar from "../navbar/navbar";
import "./quepensamos.css"

export default function QuePensamos({ dimension }) {

    return (<div>
        <NavBar dimension={dimension} />
        <div className="Historia-box">
            <div className="quePensamos-box"><h2 style={{ display: "flex", justifyContent: "center", textShadow: "1px 1px 2px black", marginBottom: "10%" }}>¿Que Pensamos?</h2></div>
            <div>
                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>

                    <h5 style={dimension.width > 900 ? { width: "40%" } : { width: "90%" }}>Somos jóvenes que vivimos durante toda la vida en un municipio gobernado por el peronismo, donde el populismo y la desidia es lo más natural, por eso nos comprometimos a generar el cambio para que todos los ciudadanos del municipio puedan vivir dignamente, con posibilidad de crecimiento y desarrollo, y para lograrlo debemos meternos en política.</h5>
                </div>
                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>

                    <h5 style={dimension.width > 900 ? { width: "40%" } : { width: "90%" }}>Y para hacer política, sabemos que es fundamental: estar cerca, escuchar, intercambiar ideas, y tener siempre como objetivo atender las necesidades de esa sociedad.</h5>
                </div>
                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>

                    <h5 style={dimension.width > 900 ? { width: "40%" } : { width: "90%" }}>En el núcleo del PRO se encuentran estas tres dimensiones las cuales deben actuar juntas: Cercanía, Positividad y Futuro.</h5>
                </div>
            </div>
            <div>
                <Link to="/sumate">
                    <button className="sumate-btn">SUMATE</button>
                </Link>
            </div>

        </div>

        <div style={{ height: "100%", display: "flex", alignItems: "flex-end" }}>

            <Footer dimension={dimension} ></Footer>
        </div>

    </div>)
}