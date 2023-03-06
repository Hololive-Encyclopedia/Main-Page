import React from 'react';
import Cover from "../image/cover.png";
import Menu from "./Menu";

export default function Landing() {

    return (
        <div className="main">
            <nav className="header">
                <div className="navbar">
                    <img src={Cover} alt="logo" className="header--logo" />
                    <h2 className="header--title">Hololive</h2>
                    <Menu />
                    <div className="nav-links">
                        <a href="#home">Home</a>
                        <a href="#about">About us</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </nav>

            <h1 className="main--title">
                Welcome to <br /> Hololive Encyclopedia
            </h1>
            <div className="down-button">
                <a href="#intro">
                    <i class='fa fa-chevron-circle-down'></i>
                </a>
            </div>
        </div>
    );
}