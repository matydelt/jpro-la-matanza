import React from "react";
import { Link } from "react-router-dom";

export default function card({ text, image, type }) {
    return (
        <div className="card-box">
            <div className={`secretarias-image ${image}`}> </div>
            <div className="cntnt-card-box">
                <h2 style={{ textShadow: "1px 1px 1px black", color: "white" }}>{type}</h2>
                <div className="secretarias-text text-one">
                    <p style={{}} className="secretarias-p">{text}</p>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Link to="/sumate">
                        <button className="sumate-btn">¡SUMATE!</button>
                    </Link>
                </div>
            </div>
        </div>)
}