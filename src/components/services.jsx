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
         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis atque harum alias quasi at voluptates doloremque, debitis earum fugit unde eos est ipsa incidunt inventore pariatur ipsam voluptatem! Placeat, quaerat!"
      ),
      cardFunc(
         <FaRecycle />,
         "KOMSwap",
         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis atque harum alias quasi at voluptates doloremque, debitis earum fugit unde eos est ipsa incidunt inventore pariatur ipsam voluptatem! Placeat, quaerat!"
      ),
      cardFunc(
         <FaImage />,
         "KOM NFT LAunch",
         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis atque harum alias quasi at voluptates doloremque, debitis earum fugit unde eos est ipsa incidunt inventore pariatur ipsam voluptatem! Placeat, quaerat!"
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
