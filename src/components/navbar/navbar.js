/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { CgMenu } from "react-icons/cg"
import { IoClose } from "react-icons/io5";
export default function NavBar({ dimension }) {
    const [sidebar, setSidebar] = React.useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (<div className="navBox">
        <div>
            <Link to="/" className="logoo">
                <div className="logoPro"></div>
            </Link>
        </div>
        {dimension.width > 991 ?
            <div className="items-box">
                <div >
                    <Link to="/sumate" className="button">
                        SUMATE
                    </Link>
                </div>
                <div>
                    <Link to="/sumate" className="button">
                        ¿COMO PARTICIPAR?
                    </Link>
                </div>
                <div>
                    <Link to="/sumate" className="button">
                        ¿Quienes somos?
                    </Link>
                </div>
                <div>
                    <Link to="/sumate" className="button">
                        ¿que estamos haciendo?
                    </Link>
                </div>
                <div>
                    <Link to="/sumate" className="button">
                        HAY RAZONES
                    </Link>
                </div>
                <div className="icons-box">
                    <div style={{ padding: "5px" }}>
                        <a href="https://facebook.com" target={"_blank"} rel="noopener noreferrer">
                            <FaFacebookF className="icon" />
                        </a>
                    </div>
                    <div style={{ padding: "5px" }}>
                        <a href="https://instagram.com" target={"_blank"} rel="noopener noreferrer">
                            <FaInstagram className="icon" />
                        </a>
                    </div>
                    <div style={{ padding: "5px" }}>
                        <a href="https://twitter.com" target={"_blank"} rel="noopener noreferrer" >
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
                                <img style={{ width: "60px" }} src="https://pro.com.ar/wp-content/themes/pro/assets/images/logo_blanco.svg" />
                            </Link>
                            <div style={{ width: "100%", display: "flex", justifyContent: "flex-end", marginLeft: "10px" }}>
                                <a onClick={showSidebar}  >
                                    <IoClose style={{ width: "60px", height: "60px", color: "white" }} />
                                </a>

                            </div>
                        </li>
                        <li key={1} className="nav-text"
                            style={{ marginTop: "30px" }}>
                            <Link to={"/sumate"} >
                                <span>{"sumate"}</span>
                            </Link>
                        </li>
                        <li key={2} className="nav-text">
                            <Link to={"/SUMATE"} >
                                <span>{"¿cómo participar?"}</span>
                            </Link>
                        </li>
                        <li key={3} className="nav-text">
                            <Link to={"/SUMATE"} >
                                <span>{"¿Quienes somos?"}</span>
                            </Link>
                        </li>
                        <li key={4} className="nav-text">
                            <Link to={"/SUMATE"} >
                                <span>{"¿qué estamos haciendo?"}</span>
                            </Link>
                        </li>
                        <li key={5} className="nav-text">
                            <Link to={"/SUMATE"} >
                                <span>{"hay razones"}</span>
                            </Link>
                        </li>
                        <li className='navbar-toggle'>
                            <div className="icons-box">
                                <div style={{ padding: "5px" }}>
                                    <a href="https://facebook.com" target={"_blank"} rel="noopener noreferrer">
                                        <FaFacebookF className="iconSide" />
                                    </a>
                                </div>
                                <div style={{ padding: "5px" }}>
                                    <a href="https://instagram.com" target={"_blank"} rel="noopener noreferrer">
                                        <FaInstagram className="iconSide" />
                                    </a>
                                </div>
                                <div style={{ padding: "5px" }}>
                                    <a href="https://twitter.com" target={"_blank"} rel="noopener noreferrer" >
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