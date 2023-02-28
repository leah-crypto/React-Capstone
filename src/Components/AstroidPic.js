import { useEffect, useState } from "react";
import astroid from "../assets/astroid.jpg"

const AstroidPic = () => {

  return (
    <div id="iss-pic">
      <img src={astroid} className="spacePhoto"></img>
    </div>
  );
};

export default AstroidPic;