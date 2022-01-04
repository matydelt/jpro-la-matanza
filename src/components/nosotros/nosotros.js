import React from "react";
import Footer from "../footer/footer";
import NavBar from "../navbar/navbar";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./nosotros.css"

export default function Nosotros({ dimension }) {

    return (<div className="nosotros-container">
        <NavBar dimension={dimension} />
        <div className="Persons-container"></div>
        <div className="importante-box">
            <div className="person-container">
                <div className="avatar diego"></div>
                <h2 style={{ color: "#333" }}>Hernan Berisso</h2>
                <h4 style={{ color: "#333" }}>Conduccion</h4>
                <div>
                    <div className="redes-box">
                        <div style={{ padding: "5px", alignItems: "flex-end" }}>
                            <a href="https://facebook.com/Hernan.Berisso" target={"_blank"} rel="noopener noreferrer">
                                <FaFacebookF className="iconPerson" style={dimension.width > 900 ? {} : {}} />
                            </a>
                        </div>
                        <div style={{ padding: "5px" }}>
                            <a href="https://www.instagram.com/hberisso/" target={"_blank"} rel="noopener noreferrer">
                                <FaInstagram className="iconPerson" style={dimension.width > 900 ? {} : {}} />
                            </a>
                        </div>
                        <div style={{ padding: "5px" }}>
                            <a href="https://twitter.com/hernanberisso" target={"_blank"} rel="noopener noreferrer" >
                                <FaTwitter className="iconPerson " style={dimension.width > 900 ? {} : {}} />
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        {/* <h2 style={{ color: "#333" }}>Consejales</h2> */}
        <div className="consejales-container">

            <div className="person-container">
                <div className="avatar diego"></div>
                <h2 style={{ color: "#333" }}>Mirta Redes</h2>
                <h4 style={{ color: "#333" }}>Consejal</h4>
                <div>
                    <div className="redes-box">
                        <div style={{ padding: "5px", alignItems: "flex-end" }}>
                            <a href="https://facebook.com" target={"_blank"} rel="noopener noreferrer">
                                <FaFacebookF className="iconPerson" style={dimension.width > 900 ? {} : {}} />
                            </a>
                        </div>
                        <div style={{ padding: "5px" }}>
                            <a href="https://www.instagram.com/jpro.lamatanza/" target={"_blank"} rel="noopener noreferrer">
                                <FaInstagram className="iconPerson" style={dimension.width > 900 ? {} : {}} />
                            </a>
                        </div>
                        <div style={{ padding: "5px" }}>
                            <a href="https://twitter.com" target={"_blank"} rel="noopener noreferrer" >
                                <FaTwitter className="iconPerson " style={dimension.width > 900 ? {} : {}} />
                            </a>
                        </div>
                    </div>
                </div>
                {/* <div className="discursoConsejal-box">
                    <p className="discurso">Soy Patricia Bullrich, Dra. en Ciencias Políticas, desde diciembre de 2019 soy la Presidente del PRO.
                        Fui Diputada de la Nación por la Ciudad de Buenos Aires, Subsecretaría de Relación con la Comunidad del Ministerio de Seguridad de la Provincia de Buenos Aires,
                        Secretaría de Política Criminal y Asuntos Penitenciarios del Ministerio de Justicia de la Nación, Ministra de Seguridad Social de la Nación,
                        Ministra de Trabajo de la Nación, y Ministra de Seguridad de la Nación.</p>
                </div> */}
            </div>
            <div className="person-container">
                <div className="avatar diego"></div>
                <h2 style={{ color: "#333" }}>Laura Greco</h2>
                <h4 style={{ color: "#333" }}>Consejal</h4>
                <div>
                    <div className="redes-box">
                        <div style={{ padding: "5px", alignItems: "flex-end" }}>
                            <a href="https://facebook.com" target={"_blank"} rel="noopener noreferrer">
                                <FaFacebookF className="iconPerson" style={dimension.width > 900 ? {} : {}} />
                            </a>
                        </div>
                        <div style={{ padding: "5px" }}>
                            <a href="https://www.instagram.com/jpro.lamatanza/" target={"_blank"} rel="noopener noreferrer">
                                <FaInstagram className="iconPerson" style={dimension.width > 900 ? {} : {}} />
                            </a>
                        </div>
                        <div style={{ padding: "5px" }}>
                            <a href="https://twitter.com" target={"_blank"} rel="noopener noreferrer" >
                                <FaTwitter className="iconPerson " style={dimension.width > 900 ? {} : {}} />
                            </a>
                        </div>
                    </div>

                </div>
                {/* <div className="discursoConsejal-box">
                    <p className="discurso">Soy Patricia Bullrich, Dra. en Ciencias Políticas, desde diciembre de 2019 soy la Presidente del PRO.
                        Fui Diputada de la Nación por la Ciudad de Buenos Aires, Subsecretaría de Relación con la Comunidad del Ministerio de Seguridad de la Provincia de Buenos Aires,
                        Secretaría de Política Criminal y Asuntos Penitenciarios del Ministerio de Justicia de la Nación, Ministra de Seguridad Social de la Nación,
                        Ministra de Trabajo de la Nación, y Ministra de Seguridad de la Nación.</p>
                </div> */}
            </div>
            <div className="person-container">
                <div className="avatar diego"></div>
                <h2 style={{ color: "#333" }}>Jorge Lampa</h2>
                <h4 style={{ color: "#333" }}>Consejal</h4>
                <div>
                    <div className="redes-box">
                        <div style={{ padding: "5px", alignItems: "flex-end" }}>
                            <a href="https://facebook.com" target={"_blank"} rel="noopener noreferrer">
                                <FaFacebookF className="iconPerson" style={dimension.width > 900 ? {} : {}} />
                            </a>
                        </div>
                        <div style={{ padding: "5px" }}>
                            <a href="https://www.instagram.com/jpro.lamatanza/" target={"_blank"} rel="noopener noreferrer">
                                <FaInstagram className="iconPerson" style={dimension.width > 900 ? {} : {}} />
                            </a>
                        </div>
                        <div style={{ padding: "5px" }}>
                            <a href="https://twitter.com" target={"_blank"} rel="noopener noreferrer" >
                                <FaTwitter className="iconPerson " style={dimension.width > 900 ? {} : {}} />
                            </a>
                        </div>
                    </div>
                </div>
                {/* <div className="discursoConsejal-box">
                    <p className="discurso">Soy Patricia Bullrich, Dra. en Ciencias Políticas, desde diciembre de 2019 soy la Presidente del PRO.
                        Fui Diputada de la Nación por la Ciudad de Buenos Aires, Subsecretaría de Relación con la Comunidad del Ministerio de Seguridad de la Provincia de Buenos Aires,
                        Secretaría de Política Criminal y Asuntos Penitenciarios del Ministerio de Justicia de la Nación, Ministra de Seguridad Social de la Nación,
                        Ministra de Trabajo de la Nación, y Ministra de Seguridad de la Nación.</p>
                </div> */}
            </div>
        </div>
        <div className="importante-box">
            <div className="person-container">
                <div className="avatar diego"></div>
                <h2 style={{ color: "#333" }}>Ricky Yñiguez</h2>
                <h4 style={{ color: "#333" }}>Consejero Escolar</h4>
                <div>
                    <div className="redes-box">
                        <div style={{ padding: "5px", alignItems: "flex-end" }}>
                            <a href="https://facebook.com" target={"_blank"} rel="noopener noreferrer">
                                <FaFacebookF className="iconPerson" style={dimension.width > 900 ? {} : {}} />
                            </a>
                        </div>
                        <div style={{ padding: "5px" }}>
                            <a href="https://www.instagram.com/jpro.lamatanza/" target={"_blank"} rel="noopener noreferrer">
                                <FaInstagram className="iconPerson" style={dimension.width > 900 ? {} : {}} />
                            </a>
                        </div>
                        <div style={{ padding: "5px" }}>
                            <a href="https://twitter.com" target={"_blank"} rel="noopener noreferrer" >
                                <FaTwitter className="iconPerson " style={dimension.width > 900 ? {} : {}} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div style={{ height: "100%", display: "flex", alignItems: "flex-end" }}>

            <Footer dimension={dimension} ></Footer>
        </div>
    </div>)
}