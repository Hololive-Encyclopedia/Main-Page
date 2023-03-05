import React from "react";
import Intro from "./pages/intro";
import Landing from "./pages/landing";

export default function Main() {
    return (
        <div className="page">
            <Landing />
            <Intro/>
        </div>
    );
}

