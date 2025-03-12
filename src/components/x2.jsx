import React, { useState } from "react";

const X2 = () => {
  const [ImageIndex,setImageIndex]= useState(0);

  const images = [
    "https://images.pexels.com/photos/30911091/pexels-photo-30911091/free-photo-of-colorful-summer-day-at-coney-island-amusement-park.jpeg",
    "https://images.pexels.com/photos/6376748/pexels-photo-6376748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/29940745/pexels-photo-29940745/free-photo-of-snow-capped-mountains-in-lush-green-valley.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/26932450/pexels-photo-26932450/free-photo-of-deers-on-a-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  ];

  const imagesStyle = {
    height: "100%",
    weight: "100%",
    backgroundImage: `url(${images[ImageIndex]})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    "border-radius": "10px",
  };

  const goLeft = () => setImageIndex((prev) => (prev + images.length - 1) % images.length);
  const goRight = () => {setImageIndex((prev) => (prev + images.length + 1) % images.length);};

  return (
    <div className="ImageContainer mx-auto w-[650px] h-[455px] m-[10px] relative">
      <div className="images" style={imagesStyle}></div>
      <div className="leftButton absolute top-1/2 -transition-y-1/2 left-[10px] cursor-pointer text-4xl text-black " onClick={() => goLeft()}>
        ←
      </div>
      <div className="rightButton absolute top-1/2 -transition-y-1/2 right-[10px] cursor-pointer text-4xl text-black" onClick={() => goRight()}>
        →
      </div>
    </div>
  );
};

export default X2;
