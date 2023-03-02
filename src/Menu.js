import React from "react";
import downbutton from "./image/down.png";

export default function Menu(props) {
    
    function menubar(){
        return(
            console.log("menu clicked")
        )
    }
    return (
        <div className="menu">
            <img src={downbutton} alt="menu" className="menu--icon" onClick={menubar} />
        </div>
    );
}