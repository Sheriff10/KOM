import React from "react";

export const Header = () => {
   const toggleMenu = () => {
      const menu = document.querySelector(".menu-btn .menu-btn-burger");
      const slide = document.querySelector(".menu-link");
      if (menu) menu.classList.toggle("open");
      if (slide) slide.classList.toggle("open");
    };
   return (
      <div className="header">
         <div className="c">
            <div className="logo">
               <img src="m2n.png" alt="king of meme" className="img-fluid" />
            </div>
            <div className="menu-link">
               <ul>
                  <li>
                     <a href="#" onClick={toggleMenu}>Home</a>
                  </li>
                  <li>
                     <a href="#about" onClick={toggleMenu}>About</a>
                  </li>
                  <li>
                     <a href="#tokenomics" onClick={toggleMenu}>Tokenomics</a>
                  </li>
                  <li>
                     <a href="#roadmap" onClick={toggleMenu}>Roadmap</a>
                  </li>
               </ul>
            </div>
            <div className="menu-btn" onClick={toggleMenu}>
               <div className="menu-btn-burger"></div>
            </div>
         </div>
      </div>
   );
};
