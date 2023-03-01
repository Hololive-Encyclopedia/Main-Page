import React from "react";
import Cover from "./image/cover.png";

export default function Main() {
    return (
        <div className="main">
            <nav className="header">
                <img src={Cover} alt="logo" className="header--logo" />
                <h2 className="header--title">Hololive</h2>
                <h3 className="home">Home</h3>
                <h3 className="about_us">About us</h3>
                <h3 className="contact">Contact</h3>
            </nav>
            <h1 className="main--title1">
                Welcome to
            </h1>
            <h2 className="main--title2">
                Hololive Encyclopedia
            </h2>


        </div>
    );
}

