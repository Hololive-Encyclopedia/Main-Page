// import React from 'react';
// import Cover from "../image/cover.png";
// import Menu from "./Menu";

// export default function Landing() {

//     return (
//         <div className="main">
//             <nav className="header">
//                 <div className="navbar">
//                     <img src={Cover} alt="logo" className="header--logo" />
//                     <h2 className="header--title">Hololive</h2>
//                     <Menu />
//                     <div className="nav-links">
//                         <a href="#home">Home</a>
//                         <a href="#about">About us</a>
//                         <a href="#contact">Contact</a>
//                     </div>
//                 </div>
//             </nav>

//             <h1 className="main--title">
//                 Welcome to <br /> Hololive Encyclopedia
//             </h1>
//             <div className="down-button">
//                 <a href="#intro">
//                     <i class='fa fa-chevron-circle-down'></i>
//                 </a>
//             </div>
//         </div>
//     );
// }



import React from 'react';
import Cover from "../image/cover.png";
import Menu from "./Menu";

export default function Landing() {
  const scrollToIntro = (event) => {
    event.preventDefault();

    const introSection = document.querySelector('#intro');
    const introSectionPos = introSection.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: introSectionPos,
      behavior: 'smooth'
    });
  };

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
        <a href="#intro" onClick={scrollToIntro}>
          <i className='fa fa-chevron-circle-down'></i>
        </a>
      </div>
    </div>
  );
}
