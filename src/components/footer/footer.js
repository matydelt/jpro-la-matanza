import React from "react"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "./footer.css"
export default function Footer() {

    return (<div className="footer-box">

        <div className="redes-box">
            <div style={{ padding: "5px", alignItems: "flex-end" }}>
                <a href="https://facebook.com" target={"_blank"} rel="noopener noreferrer">
                    <FaFacebookF color="white" className="iconSide" />
                </a>
            </div>
            <div style={{ padding: "5px" }}>
                <a href="https://www.instagram.com/jpro.lamatanza/" target={"_blank"} rel="noopener noreferrer">
                    <FaInstagram color="white" className="iconSide" />
                </a>
            </div>
            <div style={{ padding: "5px" }}>
                <a href="https://twitter.com" target={"_blank"} rel="noopener noreferrer" >
                    <FaTwitter color="white" className="iconSide" />
                </a>
            </div>
            <div style={{ padding: "5px" }}>
                <a href="https://youtube.com" target={"_blank"} rel="noopener noreferrer">
                    <FaYoutube color="white" className="iconSide" />
                </a>
            </div>
        </div>
    </div>)
}