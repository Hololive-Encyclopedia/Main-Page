import React from "react";
import Cover from "./image/cover.png";

export default function Main() {
    return (
        <div className="main">
            <nav className="header">
                <div className="navbar">
                    <img src={Cover} alt="logo" className="header--logo" />
                    <h2 className="header--title">Hololive</h2>
                    <div className="nav-links">
                        <h3>Home</h3>
                        <h3>About us</h3>
                        <h3>Contact</h3>
                    </div>
                </div>
            </nav>

            <h1 className="main--title">
                Welcome to <br/> Hololive Encyclopedia
            </h1>
        </div>
    );
}

