import React, { useState } from "react";
// import image1 from "../images/";

const ImageSlider = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    {
      url: "https://i.postimg.cc/x8SRNQDR/7-reasons-why-you-should-choose-online-counselling.webp",
      title: "Qualityful secure, remote and personalised Counselling" ,
      description:
        "Discover the benefits of remote counseling with our professional and dedicated team of therapists. Our services offer a personalized approach to mental health, ensuring each session is tailored to your unique needs. Enjoy the convenience of accessing support from the comfort of your home while maintaining complete confidentiality and security. Our counselors are here to guide you through life's challenges, providing expert advice and emotional support. Take the first step towards a healthier, happier you with our trusted and secure online counseling services.",
    },
    {
      url: "https://images.pexels.com/photos/6376748/pexels-photo-6376748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Serene Mountain Views",
      description:
        "Embrace the beauty of nature with stunning mountain landscapes. A peaceful getaway to refresh your mind and soul.",
    },
    // {
    //   url: "https://images.pexels.com/photos/29940745/pexels-photo-29940745/free-photo-of-snow-capped-mountains-in-lush-green-valley.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //   title: "Majestic Snowy Peaks",
    //   description:
    //     "Witness breathtaking views of snow-capped mountains. Perfect for adventurers and nature lovers.",
    // },
    // {
    //   url: "https://images.pexels.com/photos/26932450/pexels-photo-26932450/free-photo-of-deers-on-a-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    //   title: "Wildlife in Nature",
    //   description:
    //     "Explore the wilderness and discover the beauty of wildlife in its natural habitat.",
    // },
  ];

  const goLeft = () => {
    setImageIndex((prevIndex) => (prevIndex + images.length - 1) % images.length);
  };

  const goRight = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="flex items-center justify-center w-[95%] mx-auto rounded-lg text-[rgb(17,31,32)] overflow-hidden">
      {/* Image Section (60%) */}
      <div className="w-[60%] relative ">
        <div
          className="w-full h-[400px] bg-cover bg-center transition-all duration-500 rounded-lg"
          style={{ backgroundImage: `url(${images[imageIndex].url})` }}
        ></div>
        <button
          className="absolute left-3 text-white top-[85%] transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-gray-800"
          onClick={goLeft}
        >
          ←
        </button>
        <button
          className="absolute text-white right-3 top-[85%] transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-gray-800"
          onClick={goRight}
        >
          →
        </button>
      </div>

      {/* Text Section (40%) */}
      <div className="w-[40%] p-6 flex flex-col justify-center text-left">
        <h2 className="text-2xl font-semibold">
          {images[imageIndex].title}
        </h2>
        <p className="mt-3 ">{images[imageIndex].description}</p>
      </div>
    </div>
  );
};

export default ImageSlider;
