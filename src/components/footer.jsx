import React from "react";
import { FaTwitter, FaTelegram } from "react-icons/fa";

export const Footer = () => {
   return (
      <div className="footer">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-10 col-12 f-card-con">
                  <div className="f-logo">
                    <img src="m2.png" alt="King Of Meme" className="img-fluid"/>
                  </div>
                  <div className="row">
                     <div className="col-lg-6 col-md-6 col-12">
                        <div className="f-card">
                           <div className="f-card-head">
                              <span>King Of Meme</span>
                           </div>
                           <div className="f-card-text">
                              <p>
                                 Lorem ipsum dolor sit amet consectetur
                                 adipisicing elit. Error odio incidunt deserunt
                                 soluta necessitatibus, veritatis unde.
                                 Recusandae eligendi excepturi reiciendis ea ex,
                                 cum ipsam, explicabo quo voluptatibus
                                 blanditiis omnis doloremque.
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 col-12">
                        <div className="f-card">
                           <div className="f-card-head">
                              <span>Look Around</span>
                           </div>
                           <div className="f-card-text">
                              <ul>
                                 <li>
                                    <a href="#">About dn</a>
                                 </li>
                                 <li>
                                    <a href="#">About</a>
                                 </li>
                                 <li>
                                    <a href="#">About</a>
                                 </li>
                                 <li>
                                    <a href="#">About</a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 col-12">
                        <div className="f-card">
                           <div className="f-card-head">
                              <span>Get Connected</span>
                           </div>
                           <div className="f-card-text">
                              <div className="socials">
                                 <i>
                                    {" "}
                                    <FaTwitter />{" "}
                                 </i>
                                 <i>
                                    {" "}
                                    <FaTelegram />{" "}
                                 </i>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="f-cap text-center p-3">
               <div>
                  <span>Copyright © 2023 KOM. All Rights Reserved.</span>
               </div>
            </div>
         </div>
      </div>
   );
};
