import React from "react";
import Footer from "../footer/footer";
import NavBar from "../navbar/navbar";
import "./quehacemos.css"

export default function QueHacemos({ dimension }) {

    return (<div className="quehacemos-box">
        <NavBar dimension={dimension} />

        <div style={{ height: "100%", display: "flex", alignItems: "flex-end" }}>

            <Footer dimension={dimension} ></Footer>
        </div>
    </div>)
}