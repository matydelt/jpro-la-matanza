import React from "react"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./footer.css"
export default function Footer({ dimension }) {
    return (<div className="footer-box">
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Link to="/" >
                <div className="image-box-footer"></div>
            </Link>
        </div>
        <div className="redes-box">
            <div style={{ padding: "5px", alignItems: "flex-end" }}>
                <a href="https://www.facebook.com/jprolamatanzaok" target={"_blank"} rel="noopener noreferrer">
                    <FaFacebookF color="white" className="iconfooter" style={dimension.width > 900 ? {} : {}} />
                </a>
            </div>
            <div style={{ padding: "5px" }}>
                <a href="https://www.instagram.com/jpro.lamatanza/" target={"_blank"} rel="noopener noreferrer">
                    <FaInstagram color="white" className="iconfooter" style={dimension.width > 900 ? {} : {}} />
                </a>
            </div>
            <div style={{ padding: "5px" }}>
                <a href="https://twitter.com/jprolamatanzaok" target={"_blank"} rel="noopener noreferrer" >
                    <FaTwitter color="white" className="iconfooter " style={dimension.width > 900 ? {} : {}} />
                </a>
            </div>
            <div style={{ padding: "5px" }}>
                <a href="https://youtube.com" target={"_blank"} rel="noopener noreferrer">
                    <FaYoutube color="white" className="iconfooter" style={dimension.width > 900 ? {} : {}} />
                </a>
            </div>
        </div>
    </div >)
}