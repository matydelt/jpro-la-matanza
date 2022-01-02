import React from "react";
import NavBar from "../navbar/navbar";
import "./futuro.css"
import Footer from "../footer/footer"

export default function Futuro({ dimension }) {

    return (<div>
        <NavBar dimension={dimension} />
        <div className="Historia-box">
            <div className="futuro-box"><h2 style={{ display: "flex", justifyContent: "center" }}>Futuro</h2></div>
            <div>
                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>

                    <h5 style={{ width: "40%" }}>Todo esto empezó cuando en la crisis del 2001 todos los argentinos sentimos que los políticos habían dejado de representarnos. Fue ahí donde decidimos tomar una postura más activa, y convertirnos en protagonistas de la historia, cambiando las cosas nosotros mismos. Ese fue el impulso inicial que dio origen al PRO.</h5>
                </div>
                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>

                    <h5 style={{ width: "40%" }}>Estamos convencidos que debemos trabajar con valores, honestidad, trabajo y diálogo. Defendiendo la libertad y la democracia. Creemos que cambiar la realidad en la que vivimos lleva tiempo y esfuerzo. Y no nos resignamos a vivir así, porque creemos que vale la pena pelear por nuestro país, por nuestra provincia y por nuestro municipio.
                        Somos el futuro que hará historia y nos dará una oportunidad de vivir en nuestro país, queremos que vos también seas parte de esto!.</h5>
                </div>
            </div>

        </div>

        <div style={{ height: "100%", display: "flex", alignItems: "flex-end" }}>

            <Footer dimension={dimension} ></Footer>
        </div>

    </div >)
}