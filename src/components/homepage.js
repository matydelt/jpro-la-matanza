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
            <div>

                <div className="image-box" >
                    <div className="text-box" >
                        <div className="first-text">
                            <p className="p1-first-text">Hernán Berisso</p>
                            <p className="p2-first-text">conducción</p>
                        </div>
                        <div className="second-text">
                            <p className="p1-second-text">Juventud de</p>
                            <p className="p2-second-text">Diego "EL COLO" Santilli</p>
                        </div>
                    </div></div>

            </div>

        </div>
    </div >)
}