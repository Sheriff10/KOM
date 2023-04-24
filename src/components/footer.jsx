import React from "react";
import { FaTwitter, FaTelegram } from "react-icons/fa";

export const Footer = () => {
   return (
      <div className="footer">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-10 col-12 f-card-con">
                  <div className="f-logo">
                     <img
                        src="m2.png"
                        alt="King Of Meme"
                        className="img-fluid"
                     />
                  </div>
                  <div className="row">
                     <div className="col-lg-6 col-md-6 col-12">
                        <div className="f-card">
                           <div className="f-card-head">
                              <span>King Of Meme</span>
                           </div>
                           <div className="f-card-text">
                              <p>
                                 KOM is a Hyper Deflationary Reward token built
                                 on the ARBITRUM blockchain and the governance
                                 token for the ecosystem.. It has a total supply
                                 of 10 billion tokens, with no plan to mint
                                 more. KOM has a tax of 5%, where 1% is for ARB
                                 reflection, 3% is for Marketing and 1% is for
                                 automatic burn, reducing the total supply over
                                 time. This model incentivizes holders to keep
                                 their tokens, increasing the value of the token
                                 over time.
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
                                    <a href="#about">About</a>
                                 </li>
                                 <li>
                                    <a href="#tokenomics">Tokenomics</a>
                                 </li>
                                 <li>
                                    <a href="#roadmap">Roadmap</a>
                                 </li>
                                 <li>
                                    <a href="#">Build</a>
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
                                    <a href="https://twitter.com/KingOfMemees?t=bi0PQrvYI34pEjvgn0P0Sw&s=09">
                                       <FaTwitter />
                                    </a>
                                 </i>
                                 <i>
                                    <a href="https://t.me/KINGOFMEMESOFFICIAL">
                                       <FaTelegram />
                                    </a>
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
