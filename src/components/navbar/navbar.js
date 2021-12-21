/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { CgMenu } from "react-icons/cg"
export default function NavBar({ dimension }) {
    return (<div className="navBox">
        <div>
            <Link to="/" className="logoo">
                {/* <img src="https://pro.com.ar/wp-content/themes/pro/assets/images/logo.svg" style={{ width: "50" }} >
                </img> */}
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
                        Nosotros
                    </Link>
                </div>
                <div>
                    <Link to="/sumate" className="button">
                        que estamos haciendo
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
                <CgMenu className="hamburger" />
            </div>
        }
    </div>)
}