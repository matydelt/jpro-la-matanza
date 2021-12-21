/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import NavBar from "./navbar/navbar";
import "./homepage.css"
export default function HomePage() {
    const [dimension, updateDimention] = useState({ width: window.innerWidth, height: window.innerHeight });
    useEffect(() => {
        window.addEventListener("resize", () => {
            updateDimention({
                ...dimension,
                width: window.innerWidth,
                height: window.innerHeight
            });
        })
    }, [])

    return (<div className="home-box">
        <NavBar dimension={dimension} />
        <div className="homepage-box" >

            <div className="image-box" >
                <div style={{ fontFamily: "Gotham Rounded,sand-serif", fontSize: "5.5rem", marginTop: "100px", color: "white", textShadow: "0 3px 6px rgb(0 0 0 / 25%)" }}>
                    <p style={{ width: "800px", marginRight: "none" }}>Hernán Berisso</p>
                    <p style={{ position: "relative", left: "25%", marginTop: "-100px", width: "50px" }}>conducción</p>
                </div>

                <div style={{ fontFamily: "Gotham Rounded,sand-serif", fontSize: "5.5rem", marginTop: "100px", color: "white", textShadow: "0 3px 6px rgb(0 0 0 / 25%)", }}>
                    <p style={{ width: "800px" }}>Hernán Berisso</p>
                    <p style={{ position: "relative", left: "25%", marginTop: "-100px", width: "50px" }}>conducción</p>
                </div>

            </div>

        </div>
    </div >)
}