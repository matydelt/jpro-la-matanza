import React, { useState } from "react";
import Footer from "../footer/footer";
import NavBar from "../navbar/navbar";
import "./sumate.css"

export default function Sumate({ dimension }) {
    const [solicitud, setSolicitud] = useState({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        localidad: "",
    })

    function onChange(e) {
        e.preventDefault();
        setSolicitud({ ...solicitud, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <div style={{ height: "100vh" }} className="sumate-box">
                <NavBar dimension={dimension} />
                <div className="form-box" >
                    <p className="title-sumate">SUMATE A MILITAR!</p>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <p className="text-sumate">Te envitamos a que seas parte del equipo que codo a codo trabaja a lo largo de La Matanza ayudando a nuestra comunidad.
                            Tu participación es muy importante para que nos brindes nuevas ideas y estar presente en cada rincón de nuestro municipio.
                            Necesitamos de personas que se involucren, ya que hay mucho por hacer y vos podes ser parte de este enorme proyecto de cambiar La Matanza.
                            ¡Te esperamos!</p>
                    </div>
                    <form className="form-sumate" action="https://formsubmit.co/jprolamatanzaok@gmail.com" method="POST">
                        <input type="hidden" name="_template" value="table" />
                        <Input name="nombre" type={"text"} value={solicitud.nombre} placeholder="ingresa tu nombre" onChange={onChange} ></Input>
                        <Input name="apellido" value={solicitud.apellido} placeholder="ingresa tu apellido" onChange={onChange}></Input>
                        <Input name="email" value={solicitud.email} type={"email"} placeholder="ingresa tu Email" onChange={onChange}></Input>
                        <Input name="telefono" value={solicitud.telefono} type={"tel"} placeholder="ingresa tu telefono" onChange={onChange}></Input>
                        <Input name="localidad" value={solicitud.localidad} placeholder="ingresa tu Localidad" onChange={onChange} ></Input>
                        <div className="input-box">
                            <input value={"Enviar"} type={"submit"} className="btn-enviar" />
                        </div>
                    </form>

                </div>


            </div>
            <Footer dimension={dimension} ></Footer>
        </div>)
}

function Input({ name, value, onChange, placeholder, type }) {
    return (
        <div className="input-box">
            <input className="input-sumate" name={name} type={type} value={value} placeholder={placeholder} onChange={onChange} required />
        </div>
    )
}