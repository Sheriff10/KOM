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
                           King of Memes ($KOM) is a unique deflationary meme
                           coin that has gained popularity among the crypto
                           community. Built on the Arbitrum blockchain, $KOM
                           offers a fun and innovative approach to
                           cryptocurrency investing while also implementing
                           deflationary tokenomics that incentivize holding and
                           discourage selling. <br /> <br />
                           KOM is a Hyper Deflationary Reward token built on the
                           ARBITRUM blockchain and the governance token for the
                           ecosystem.. It has a total supply of 10 billion
                           tokens, with no plan to mint more. KOM has a tax of
                           5%, where 1% is for ARB reflection, 3% is for
                           Marketing and 1% is for automatic burn, reducing the
                           total supply over time. This model incentivizes
                           holders to keep their tokens, increasing the value of
                           the token over time.
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
