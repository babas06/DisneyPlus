import React from "react";
import gambar from "../assets/Images/wonderwoman.png";

function Slider() {
  return (
    <div className="flex items-center justify-center p-5 w-screen">
      <img
        src={gambar}
        className="w-[1750px] md:h-[400px] rounded-md hover:border-[4px]
        border-gray-400 transition-all duration-100 ease-in"
      />
    </div>
  );
}

export default Slider;
