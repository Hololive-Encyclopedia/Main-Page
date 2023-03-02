import React from "react";
import downbutton from "./image/down.png";

export default function Menu(props) {
    // use function menubar to open the menu
    function menubar() {
        var menu = document.querySelector(".menubar");
        menu.classList.toggle("is-active");
    }


// document.querySelector('menu--icon').onclick = function (e) {
//     var menu = document.querySelector('menubar');

//     menu.classList.toggle('is-active');
//     e.preventDefault();
// }
    return (
        <div className="menu">
            <img src={downbutton} alt="menu" className="menu--icon" onClick={menubar}/>
            <div className="menubar">
                <ul className="menu--list">
                    <li className="menu--item"><a href="https://www.google.com/" className="menu--link">google</a></li>
                    <li className="menu--item"><a href="https://www.youtube.com/" className="menu--link">youtube</a></li>
                </ul>
                <script src={menubar}></script>
            </div>
        </div>
    );
}