import React from "react";
import Datacontainer from "./Datacontainer";
import { data } from "./Data";

const FooterContectUs = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center ">
      {data.map((item) => (
        <Datacontainer key={item.id} {...item} />
      ))}
    </div>
  );
};

export default FooterContectUs;
