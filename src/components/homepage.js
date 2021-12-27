/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
import React from "react";
import NavBar from "./navbar/navbar";
import "./homepage.css"
import { Link } from "react-router-dom";
import Footer from "./footer/footer";
import { TwitterTimelineEmbed } from "react-twitter-embed";

export default function HomePage({ dimension }) {



    return (<div className="home-box">
        <NavBar dimension={dimension} />
        <div className="homepage-box" >
            <div>

                <div className="image-box" >
                    <div className="first-text text-box">
                        <p className="p1-first-text">Hernán Berisso</p>
                        <p className="p2-first-text">conducción</p>
                    </div>
                    <div className="second-text text-box">
                        <p className="p1-second-text">Juventud de</p>
                        <p className="p2-second-text">Diego "EL COLO" Santilli</p>
                    </div>
                </div>
                <div className="container-home">
                    <div style={dimension.width < 1000 ? { display: "flex", justifyContent: "center" } : { display: "flex", justifyContent: "center" }}>
                        <div className="sumate" >
                            <h2 style={{ textTransform: "uppercase" }}>¡SUMATE A MILITAR!</h2>
                            <p >Te envitamos a que seas parte del equipo que codo a codo trabaja a lo largo de La Matanza ayudando a nuestra comunidad.
                                Tu participación es muy importante para que nos brindes nuevas ideas y estar presente en cada rincón de nuestro municipio.
                                Necesitamos de personas que se involucren, ya que hay mucho por hacer y vos podes ser parte de este enorme proyecto de cambiar La Matanza.
                                ¡Te esperamos!</p>
                            <Link to="/sumate">
                                <button className="button-home">SUMATE!</button>
                            </Link>
                        </div>
                    </div>
                    <div style={dimension.width < 1000 ? { display: "flex", justifyContent: "center" } : { display: "flex", justifyContent: "center" }}>

                        <div className="sumate">
                            <h2 style={{ textTransform: "uppercase" }}>¡Sumate a fiscalizar!</h2>
                            <p>La red de fiscales es fundamental en los año electorales.
                                Ya que esta red no sólo la conforman quienes están en las escuelas defiendo la democracia.
                                Hay un montón de otras tareas que permiten cuidar la transparencia de las elecciones,
                                como puede ser captaciones, preparación de carpetas, comida, traslado de fiscales para que voten y cualquier cosa que puedan llegar a necesitar
                                ¡Hay mucho por hacer y te necesitamos!</p>
                            <Link to="/sumate">
                                <button className="button-home">SUMATE!</button>
                            </Link>
                        </div>
                    </div>
                    <div style={dimension.width < 1000 ? { display: "flex", justifyContent: "center" } : { display: "flex", justifyContent: "center" }}>

                        <div className="sumate">
                            <h2 style={{ textTransform: "uppercase" }}>¡Participa de charlas y capacitaciones!</h2>
                            <p>Desde PRO como espacio político fomentamos el debate y el enriquecimiento de ideas, profundizando y conversando de temas que nos importan.
                                Es por esto que constantemente se organizan charlas con  dirigentes, diputados, senadores, concejales, consejeros escolares y
                                muchísimos invitados que nos puedan enriquecer con nuestras miradas
                                ¡Participa vos también!</p>
                            <Link to="/sumate">
                                <button className="button-home">SUMATE!</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="container-redes">
                    <h2>¡SEGUINOS EN NUESTRAS REDES!</h2>
                    <h3>INSTAGRAM</h3>
                    <div className="center" >
                        <iframe options={{ width: 320, height: 550 }} src="http://instagram.com/p/CXpJkCxAjTi/embed" frameborder="0" style={{ marginRight: "10px", borderRadius: "10px", minHeight: "500px" }}></iframe>
                    </div>
                    <h3>FACEBOOK</h3>
                    <div className="center" style={dimension.width > 1000 ? { marginLeft: "30px", borderRadius: "10px" } : {}}>
                        <iframe style={{ marginLeft: "10px", borderRadius: "10px", border: "none", overflow: "hidden" }} src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=300&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId" width="340" height="500" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    </div>
                    <h3>TWITTER</h3>
                    <TwitterTimelineEmbed sourceType="TwitterDev" screenName="TwitterDev" theme="dark" options={dimension.width > 900 ? { height: 500, width: 300 } : { height: 400, width: 200 }} />
                    <h3>ESCUCHA NUESTRAS CANCIONES</h3>
                    <div className="center">

                        <iframe src="https://open.spotify.com/embed/playlist/02lMgLRmrpflA4IkQdCzB3" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    </div>

                </div>

            </div>

        </div >
        <Footer></Footer>
    </div >)
}