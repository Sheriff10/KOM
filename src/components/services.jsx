import React from "react";
import { FaChartBar, FaImage, FaRecycle } from "react-icons/fa";

export const Services = () => {
   const cardFunc = (icon, title, text) => {
      return { icon, title, text };
   };
   const cardArr = [
      cardFunc(
         <FaChartBar />,
         "KOMPad",
         "King of memes ($KOM) will also feature a launch pad that serves as a platform for new projects to incubate their project, and finance their ideas."
      ),
      cardFunc(
         <FaRecycle />,
         "KOMSwap",
         "In addition to the launch pad, King of memes ($KOM) will also feature a swap platform that allows holders to trade their tokens in a decentralized manner."
      ),
      cardFunc(
         <FaImage />,
         "KOM NFT LAunch",
         "$KOM intends to create an NFT collection that features popular internet memes. The NFT collection will be created in collaboration with meme creators and will offer unique digital assets that can be traded and collected."
      ),
   ];
   return (
      <div className="service" id="services">
         <div className="container">
            <div className="s-head text-center">
               <div>
                  <h1>
                     {" "}
                     We will be making <span>our mark </span> in the crypto
                     space
                  </h1>
               </div>
            </div>
            <div className="row justify-content-center">
               <div className="col-lg-10 col-12">
                  <div className="s-card-con">
                     <div className="row ">
                        {cardArr.map((i, index) => (
                           <div
                              className="col-lg-4 col-md-6 col-12"
                              key={index}
                           >
                              <div className="s-card m-2">
                                 <div className="s-card-icon">
                                    <i>{i.icon}</i>
                                 </div>
                                 <div className="s-card-title">
                                    <span>{i.title}</span>
                                 </div>
                                 <div className="s-card-text">
                                    <p>{i.text}</p>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
