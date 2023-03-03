import React, { useRef, useEffect } from "react";
import downbutton from "./image/down.png";

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
            <img src={downbutton} alt="menu" className="menu--icon" onClick={toggleMenu} />
            <div className="menubar" ref={menuRef}>
                <h2 className="menu--title">Start Your Journey</h2>
                <h3 className="menu--hint">select a group</h3>
                <ul className="menu--list">
                    <li className="menu--item">
                        <a href="https://www.google.com/" className="menu--link">
                            google
                        </a>
                    </li>
                    <li className="menu--item">
                        <a href="https://www.youtube.com/" className="menu--link">
                            youtube
                        </a>
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