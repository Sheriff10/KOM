import React from "react";

export const Intro = () => {
   return (
      <div className="intro">
         <div className="container">
            <div className="row c align-items-center">
               <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="intro-text">
                     <h1>
                        KING OF MEMES IS HERE! <br /> TIME TO RULE
                     </h1>
                     <span>Let's take over the meme kingdom <br /> JOIN THE KING!!!</span>
                     <br /> <br />
                     <div className="btn-grup">
                        <div className="btn btn-lg"> JOIN THE PARADE</div>
                        <div className="btn btn-lg">WHITEPAPER</div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="intro-img">
                     <img src="img1.png" alt="KingOfMemes" className="img1" />
                     <img src="img2.png" alt="KingOfMemes" className="img2" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
