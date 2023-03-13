import React from "react";
import Intro from "./pages/intro";
import Landing from "./pages/landing";
import Footer from "./pages/footer";

export default function Main() {
    return (
        <div className="page">
            <Landing />
            <Intro/>
            <Footer />
        </div>
    );
}

