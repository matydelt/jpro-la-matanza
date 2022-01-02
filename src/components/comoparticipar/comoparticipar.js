/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/footer";
import NavBar from "../navbar/navbar";
import "./comoparticipar.css"
export default function ComoParticipar({ dimension }) {

    return (<div style={{ height: "100vh" }}>
        <NavBar dimension={dimension}></NavBar>
        <div style={dimension.width < 992 ? { marginTop: "17vh" } : { marginTop: "10vh" }}>
            <div className="comoParticipar-box">
                <h2 style={{ marginTop: "5%" }}>¿COMO PARTICIPAR?</h2>
                <div className="buttons-container">
                    <a className="sumate-button-comoP" href="#militarModal" style={{ width: "23.5%", marginRight: "1%" }}>Sumate a Militar!</a>
                    <a className="sumate-button-comoP" href="#Fiscalizar-Modal" style={{ width: "23.5%", marginRight: "1%" }}>Sumate a Fiscalizar!</a>
                    <a className="sumate-button-comoP" href="#charlas-Modal" style={{ width: "23.5%" }}>Sumate a charlas y capacitaciones!</a>
                    <Link to="/sumate" className="sumate-button-comoP" style={{ width: "75%", marginTop: "10px", fontSize: "30px " }}>
                        Sumate!
                    </Link>
                </div>
                <div id="militarModal" className="modal">
                    <div class="modal-contenido">
                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                            <a className="exit-modal-btn" href="#">X</a>
                        </div>
                        <div className="btn-box ">
                            <h2>¡SUMATE A MILITAR!</h2>
                        </div>
                        <div>
                            <p className="text-modal">Te envitamos a que seas parte del equipo que codo a codo trabaja a lo largo de La Matanza ayudando a nuestra comunidad.
                                Tu participación es muy importante para que nos brindes nuevas ideas y estar presente en cada rincón de nuestro municipio.
                                Necesitamos de personas que se involucren, ya que hay mucho por hacer y vos podes ser parte de este enorme proyecto de cambiar La Matanza.
                                ¡Te esperamos!</p>
                        </div>
                        <div className="link-modal">
                            <Link className="modal-btn link-modal" to="/sumate">¡SUMATE!</Link>

                        </div>
                    </div>
                </div>
                <div id="Fiscalizar-Modal" className="modal">
                    <div className="modal-contenido">
                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                            <a className="exit-modal-btn" href="#">X</a>
                        </div>
                        <div className="btn-box ">
                            <h2>¡Sumate A Fiscalizar!</h2>
                        </div>
                        <div>
                            <p className="text-modal">La red de fiscales es fundamental en los año electorales.
                                Ya que esta red no sólo la conforman quienes están en las escuelas defiendo la democracia.
                                Hay un montón de otras tareas que permiten cuidar la transparencia de las elecciones,
                                como puede ser captaciones, preparación de carpetas, comida, traslado de fiscales para que voten y cualquier cosa que puedan llegar a necesitar
                                ¡Hay mucho por hacer y te necesitamos!</p>
                        </div>
                        <div className="link-modal">
                            <Link className="modal-btn link-modal" to="/sumate">¡SUMATE!</Link>

                        </div>
                    </div>
                </div>
                <div id="charlas-Modal" className="modal">
                    <div className="modal-contenido">
                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                            <a className="exit-modal-btn" href="#">X</a>
                        </div>
                        <div className="btn-box">
                            <h2>¡Participa de charlas y capacitaciones!</h2>
                        </div>
                        <div>
                            <p className="text-modal">Desde PRO como espacio político fomentamos el debate y el enriquecimiento de ideas, profundizando y conversando de temas que nos importan.
                                Es por esto que constantemente se organizan charlas con  dirigentes, diputados, senadores, concejales, consejeros escolares y
                                muchísimos invitados que nos puedan enriquecer con nuestras miradas
                                ¡Participa vos también!</p>
                        </div>
                        <div className="link-modal">
                            <Link className="modal-btn link-modal" to="/sumate">¡SUMATE!</Link>

                        </div>
                    </div>
                </div>

                <div style={{ height: "100%", display: "flex", alignItems: "flex-end" }}>

                    <Footer dimension={dimension} ></Footer>
                </div>
            </div>
        </div>
    </div >)
}