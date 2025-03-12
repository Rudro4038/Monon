import React from "react";
import Studentimage from "../assets/illustration-of-stressed-student-student-with-book-illustration-vector.jpg";
import Professionalimage from "../assets/woman-stressed-with-overwork-flat-vector.jpg";

// bg-[#f4e1d3]
const StudentProfessionals = () => {
  return (
    <div className=" p-6 flex justify-center items-center m-6 rounded-sm text-left">
      <div className="grid grid-cols-2 gap-6 max-w-4xl w-full text-[rgb(17,31,32)]">
        {/* Student Section */}
        <div className="bg-[#E3D2C3] rounded-2xl shadow-md">
          <img
            className="w-[200px] h-[200px] m-auto p-1 rounded-lg"
            src={Studentimage}
            alt=""
          />
          <h2 className="text-lg font-bold p-3">For Students :</h2>
          <p className="p-3">
            Feeling overwhelmed with studies, exams, relationship stress, or
            career uncertainty? You're not alone. Our counselors provide
            personalized guidance to help you manage stress, build confidence,
            and navigate academic and personal challenges. With one-on-one
            sessions, we support your well-being so you can focus on growth and
            success. A healthy mind is the first step toward a brighter future!
            Let me know if you'd like any further refinements!
          </p>
          <button
          className="m-2 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          style={{ background: "rgb(24 56 99)" }}
        >
          Book Now
        </button>
        </div>

        {/* Professionals Section */}
        <div className="bg-[#E3D2C3] rounded-2xl shadow-md">
          <img
            className="w-[200px] h-[200px] m-auto p-1 rounded-lg"
            src={Professionalimage}
            alt=""
          />
          <h2 className="text-lg p-3 font-bold">For Professionals :</h2>
          <p className="p-3 ">
            Balancing work, life, and personal growth can be challenging.
            Whether it's workplace stress, career decisions, or emotional
            well-being, our expert counselors are here to support you. Get
            confidential, flexible counseling sessions designed to help you
            thrive in your professional and personal life. Take the first step
            towards a healthier, happier you!
          </p>
          <button
          className="m-2 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          style={{ background: "rgb(24 56 99)" }}
        >
          Book Now
        </button>
        </div>
      </div>
    </div>
  );
};

export default StudentProfessionals;
