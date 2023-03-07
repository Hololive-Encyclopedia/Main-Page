import React, { useRef, useEffect } from "react";

export default function Menu(props) {
    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                menuRef.current.classList.remove("is-active");
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    function toggleMenu() {
        menuRef.current.classList.toggle("is-active");
    }

    return (
        <div className="menu">
            <div className="menu--icon" onClick={toggleMenu}>
                <i class="fa fa-sort-down" ></i>
            </div>
            <div className="menubar" ref={menuRef}>
                <h2 className="menu--title">Start Your Journey</h2>
                <h3 className="menu--hint">select a group</h3>
                <h4 className="HoloJP">Holo JP</h4>
                <div className="custom--list">

                    <ul className="JPmenu">
                        <li className="JPmenu--item">
                            <a href="#GEN0" className="menu--link">GEN 0</a>
                        </li>
                        <li className="JPmenu--item">
                            <a href="#GEN1" className="menu--link">GEN 1</a>
                        </li>
                        <li className="JPmenu--item">
                            <a href="#GEN2" className="menu--link">GEN 2</a>
                        </li>
                        <li className="JPmenu--item">
                            <a href="#GEN3" className="menu--link">GEN 3</a>
                        </li>
                        <li className="JPmenu--item">
                            <a href="#GEN4" className="menu--link">GEN 4</a>
                        </li>
                        <li className="JPmenu--item">
                            <a href="#GEN5" className="menu--link">GEN 5</a>
                        </li>
                        <li className="JPmenu--item">
                            <a href="#GEN6" className="menu--link">GEN 6</a>
                        </li>
                    </ul>
                </div>

                <ul className="ENmenu">
                    <h4 className="HoloEN">Holo EN</h4>
                    <li className= "ENmenu--item">
                        <a href="#GEN0" className="menu--link">Myth</a>
                    </li>
                    <li className= "ENmenu--item">
                        <a href="#GEN1" className="menu--link">Project:Hope</a>
                    </li>
                    <li className= "ENmenu--item">
                        <a href="#GEN2" className="menu--link">Council</a>
                    </li>
                </ul>


                <ul className="IDmenu">
                    <h4 className="HoloID">Holo ID</h4>
                    <li className= "IDmenu--item">
                        <a href="#GEN0" className="menu--link">Area 15</a>
                    </li>
                    <li className= "IDmenu--item">
                        <a href="#GEN1" className="menu--link">Holoro</a>
                    </li>
                    <li className= "IDmenu--item">
                        <a href="#GEN2" className="menu--link">Holoh3roes</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
// import React from "react";
// import downbutton from "./image/down.png";

// export default function Menu(props) {
//     // use function menubar to open the menu
//     function menubar() {
//         var menu = document.querySelector(".menubar");
//         menu.classList.toggle("is-active");
//     }
//     window.addEventListener('mouseup',function(event){
//         var menubar = document.getElementById('menubar');
//         if(event.target != menubar && event.target.parentNode != menubar){
//             menubar.style.display = 'none';
//         }
//   });

//     return (
//         <div className="menu">
//             <img src={downbutton} alt="menu" className="menu--icon" onClick={menubar}/>
//             <div className="menubar">
//                 <ul className="menu--list">
//                     <li className="menu--item"><a href="https://www.google.com/" className="menu--link">google</a></li>
//                     <li className="menu--item"><a href="https://www.youtube.com/" className="menu--link">youtube</a></li>
//                 </ul>
//                 <script src={menubar}></script>
//             </div>
//         </div>
//     );
// }