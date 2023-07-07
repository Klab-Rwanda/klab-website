import React from "react";
import CommunityWelcome from "../Components/sections/Community/CommunityWelcome";
import Desc from "../Components/sections/Community/Desc";
import Partners from "../Components/sections/Community/Partners";
import Startup from "../Components/sections/Community/Startup";
import Footer from "../Components/sections/Footer";

const Community = () => {
  return (
    <div>
      <CommunityWelcome />
      <Desc />
      <Startup />
      {/* <Partners/> */}
      <Footer />
    </div>
  );
};

export default Community;
