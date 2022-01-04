import React from "react";
import Footer from "../footer/footer";
import NavBar from "../navbar/navbar";
import "./secretarias.css"

export default function Secretarias({ dimension }) {

    return (<div className="secretarias-box">
        <NavBar dimension={dimension} />

        <div style={{ height: "100%", display: "flex", alignItems: "flex-end" }}>

            <Footer dimension={dimension} ></Footer>
        </div>
    </div>)
}