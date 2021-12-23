import React from "react";
import NavBar from "../navbar/navbar";
import "./sumate.css"

export default function Sumate({ dimension }) {

    function sendEmail(e) {
        e.preventDefault();


    }
    return (<div style={{ width: "100%", height: "100vh" }} className="sumate-box">
        <NavBar dimension={dimension} />
        <div className="form-box" >
            <p className="title-sumate">SUMATE A MILITAR!</p>
            <p style={{ display: "flex", justifyContent: "center" }}>
                <p className="text-sumate">Te envitamos a que seas parte del equipo que codo a codo trabaja a lo largo de La Matanza ayudando a nuestra comunidad.
                    Tu participación es muy importante para que nos brindes nuevas ideas y estar presente en cada rincón de nuestro municipio.
                    Necesitamos de personas que se involucren, ya que hay mucho por hacer y vos podes ser parte de este enorme proyecto de cambiar La Matanza.
                    ¡Te esperamos!</p>
            </p>
            <form className="form-sumate">
                <div className="input-box">
                    <input className="input-sumate" placeholder="ingresa tu nombre y apellido" />
                </div>
                <div className="input-box">
                    <input className="input-sumate" placeholder="ingresa tu Email" />
                </div>
                <div className="input-box">
                    <input className="input-sumate" placeholder="ingresa tu telefono" />
                </div>
                <div className="input-box">
                    <input className="input-sumate" placeholder="ingresa tu Localidad" />
                </div>
                <div className="input-box">
                    <input value={"Enviar"} type={"button"} onClick={sendEmail} />
                </div>
            </form>

        </div>

    </div>)
}