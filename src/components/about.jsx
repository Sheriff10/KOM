import React from "react";

export const About = () => {
   return (
      <div className="about" id="about">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-6 col-sm-12">
                  <div className="abt-text">
                     <small>About the king</small>
                     <h1>THE MEME REVOLUTION IS HERE</h1>
                     <div className="">
                        <p>
                           Lorem, ipsum dolor sit amet consectetur adipisicing
                           elit. Repudiandae non doloremque dolorum. Esse
                           dolorem unde ducimus itaque minima! Optio, molestias
                           eaque. Libero eaque, sint vel possimus nostrum aut
                           ullam accusamus! <br /> <br />
                           Lorem ipsum dolor sit, amet consectetur adipisicing
                           elit. Facere ipsum dolorum blanditiis architecto ad
                           corrupti in aspernatur, culpa quia, veniam hic esse
                           commodi obcaecati, odio natus praesentium
                           exercitationem ipsa impedit?
                        </p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 col-sm-12">
                  <div className="abt-img">
                     <img
                        src="img3.png"
                        alt="King of Meme"
                        className="img-fluid"
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
