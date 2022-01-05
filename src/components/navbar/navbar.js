/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { CgMenu } from "react-icons/cg"
import { IoClose } from "react-icons/io5";
import { AiOutlineCaretDown, AiOutlineCaretRight, AiOutlineCaretLeft } from "react-icons/ai";

export default function NavBar({ dimension }) {
    const [sidebar, setSidebar] = React.useState(false);
    const [submenu, setSubmenu] = React.useState(false);
    const [pilares, setPilares] = React.useState(false);
    const [subSidebar, setsubSidebar] = React.useState(true);
    const [PilaresSide, setPilaresSide] = React.useState(true);
    const showSidebar = () => setSidebar(!sidebar);
    return (<div className="navBox">
        <div>
            <Link to="/" className="logoo">
                <div className="logoPro"></div>
            </Link>
        </div>
        {(dimension.width ? dimension.width : 0) > 991 ?
            <div className="items-box">
                <div >
                    <Link to="/sumate" className="button">
                        SUMATE
                    </Link>
                </div>
                <div>
                    <Link to="/como-participar" className="button">
                        ¿COMO PARTICIPAR?
                    </Link>
                </div>
                <div className="button">
                    <div style={{ textDecoration: "none" }} onClick={() => { setSubmenu(!submenu); setPilares(false) }}>¿Quienes somos?<AiOutlineCaretDown /></div>
                    <div className={submenu ? "submenu" : "submenuOff"} id="submenu">
                        <Link to="/Historia" className="menu-link" >Nuestra Historia</Link>
                        <Link to="/Representantes" className="menu-link" >Representantes</Link>
                        <Link to="/Que-Pensamos" className="menu-link" >¿Que Pensamos?</Link>
                        <div className="menu-link" onClick={() => setPilares(!pilares)}>Nuestros 3 Pilares <AiOutlineCaretRight /></div>
                        <div className={pilares ? "submenu-pilares" : "submenuOff-pilares"}>
                            <Link to="/Cercania" className="menu-link" >Cercanía</Link>
                            <Link to="/positivismo" className="menu-link" >positivismo</Link>
                            <Link to="/Futuro" className="menu-link" >Futuro</Link>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to="/Que-Estamos-Haciendo" className="button">
                        ¿que estamos haciendo?
                    </Link>
                </div>
                <div>
                    <Link to="/Nuestras-Secretarias" className="button">
                        CONOCE NUESTRAS secretarias
                    </Link>
                </div>
                <div className="icons-box">
                    <div style={{ padding: "5px" }}>
                        <a href="https://facebook.com/jprolamatanzaok" target={"_blank"} rel="noopener noreferrer">
                            <FaFacebookF className="icon" />
                        </a>
                    </div>
                    <div style={{ padding: "5px" }}>
                        <a href="https://www.instagram.com/jpro.lamatanza/" target={"_blank"} rel="noopener noreferrer">
                            <FaInstagram className="icon" />
                        </a>
                    </div>
                    <div style={{ padding: "5px" }}>
                        <a href="https://twitter.com/jprolamatanzaok" target={"_blank"} rel="noopener noreferrer" >
                            <FaTwitter className="icon" />
                        </a>
                    </div>
                    <div style={{ padding: "5px" }}>
                        <a href="https://youtube.com" target={"_blank"} rel="noopener noreferrer">
                            <FaYoutube className="icon" />
                        </a>
                    </div>
                </div>
            </div> :
            <div className="hamburger-box">
                <Link to='#' className='menu-bars' onClick={showSidebar} style={{ color: "red" }}>
                    <CgMenu className="hamburger" />
                </Link>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' >
                        <li className='navbar-toggle'>
                            <Link to="/">
                                <div className="logo-sidebar" ></div>
                            </Link>
                            <div style={{ width: "100%", display: "flex", justifyContent: "flex-end", marginLeft: "10px" }}>
                                <a onClick={showSidebar}  >
                                    <IoClose style={{ width: "60px", height: "60px", color: "white" }} />
                                </a>

                            </div>
                        </li>
                        {subSidebar ?
                            <div>
                                <li key={1} className="nav-text"
                                    style={{ marginTop: "30px" }}>
                                    <Link to={"/sumate"} >
                                        <span>{"sumate"}</span>
                                    </Link>
                                </li>
                                <li key={2} className="nav-text">
                                    <Link to={"/como-participar"} >
                                        <span>{"¿cómo participar?"}</span>
                                    </Link>
                                </li>
                                <li key={3} className="nav-text">
                                    <Link to="" onClick={() => setsubSidebar(!subSidebar)}>

                                        <span>{"¿Quienes somos?"}</span><AiOutlineCaretDown />
                                    </Link>
                                </li>
                                <li key={4} className="nav-text">
                                    <Link to={"/SUMATE"} >
                                        <span>{"¿qué estamos haciendo?"}</span>
                                    </Link>
                                </li>
                                <li key={5} className="nav-text">
                                    <Link to={"/Nuestras-Secretarias"} >
                                        <span>{"CONOCE NUESTRAS secretarias"}</span>
                                    </Link>
                                </li>
                            </div> : PilaresSide ?
                                <div>
                                    <li key={1} className="nav-text">
                                        <Link to="" onClick={() => setsubSidebar(!subSidebar)}>
                                            <AiOutlineCaretLeft style={{ marginTop: "3px" }} /><span>{"volver"}</span>
                                        </Link>
                                    </li>
                                    <li key={2} className="nav-text">
                                        <Link to={"/Historia"} >
                                            <span>{"Nuestra Historia"}</span>
                                        </Link>
                                    </li>
                                    <li key={3} className="nav-text">
                                        <Link to={"/Representantes"} >
                                            <span>{"Representantes"}</span>
                                        </Link>
                                    </li>
                                    <li key={3} className="nav-text">
                                        <Link to={"/Que-Pensamos"} >
                                            <span>{"¿Que Pensamos?"}</span>
                                        </Link>
                                    </li>
                                    <li key={4} className="nav-text">
                                        <Link to={""} onClick={() => setPilaresSide(!PilaresSide)}>
                                            <span>{"Nuestros 3 pilares"}</span><AiOutlineCaretRight style={{ marginTop: "3px" }} />
                                        </Link>
                                    </li>
                                </div> :
                                <div>
                                    <li key={1} className="nav-text">
                                        <Link to="" onClick={() => { setsubSidebar(!subSidebar); setPilaresSide(!PilaresSide) }}>
                                            <AiOutlineCaretLeft style={{ marginTop: "3px" }} /><span>{"volver"}</span>
                                        </Link>
                                    </li>
                                    <li key={2} className="nav-text">
                                        <Link to={"/Cercania"} >
                                            <span>{"Cercanía"}</span>
                                        </Link>
                                    </li>
                                    <li key={3} className="nav-text">
                                        <Link to={"/positivismo"} >
                                            <span>{"positivismo"}</span>
                                        </Link>
                                    </li>
                                    <li key={4} className="nav-text">
                                        <Link to={"/Futuro"} >
                                            <span>{"Futuro"}</span>
                                        </Link>
                                    </li>
                                </div>

                        }
                        <li className='navbar-toggle'>
                            <div className="icons-box">
                                <div style={{ padding: "5px" }}>
                                    <a href="https://facebook.com/jprolamatanzaok" target={"_blank"} rel="noopener noreferrer">
                                        <FaFacebookF className="iconSide" />
                                    </a>
                                </div>
                                <div style={{ padding: "5px" }}>
                                    <a href="https://www.instagram.com/jpro.lamatanza/" target={"_blank"} rel="noopener noreferrer">
                                        <FaInstagram className="iconSide" />
                                    </a>
                                </div>
                                <div style={{ padding: "5px" }}>
                                    <a href="https://twitter.com/jprolamatanzaok" target={"_blank"} rel="noopener noreferrer" >
                                        <FaTwitter className="iconSide" />
                                    </a>
                                </div>
                                <div style={{ padding: "5px" }}>
                                    <a href="https://youtube.com" target={"_blank"} rel="noopener noreferrer">
                                        <FaYoutube className="iconSide" />
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>

        }
    </div >)
}