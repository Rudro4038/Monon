import image1 from "../assets/image1.jpg";
import logo from "../assets/mononLogo-removebg-preview.png";
import style from "../styles/Section1.module.css";

export default function Section1() {
  const logoStyle = {
    position: "absolute",
    top: "0%",
    left: "0%",
    // transform: "translate(-50%, -50%)",
    width: "150px",
    height: "150px",
    borderRadius: "50%",
  };

  return (
    <div
      className="grid grid-cols-12 max-h-[55vh] h-[55vh] pl-8 pr-8 position-relative"
      style={{ background: "#00B1B7" }}
    >
      {/* <img src={logo} alt="logo" style={logoStyle} /> */}

      {/* Left Column */}
      <div
        className={`col-span-5 h-full flex items-center justify-center overflow-hidden ${style.imageContainer}`}
      >
        <img
          src={image1}
          alt="Description"
          className="w-full h-full object-scale-down"
        />
      </div>

      {/* Right Column */}
      <div className="col-span-7 h-full flex flex-col items-start justify-center text-black p-8 ">
        <h1
          className="text-left text-[rgb(17,31,32)] font-bold"
          style={{ "font-size": "2rem" }}
        >
          Monon,
        </h1>
        <h2
          className="text-left text-[rgb(17,31,32)] font-semibold"
          style={{ "font-size": "1.5rem" }}
        >
          one-stop solution to mental health.
        </h2>
        {/* <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl md:text-base text-left">
          Welcome to Monon!
        </h1> */}
        <p className="text-left text-[rgb(17,31,32)]">
          A platform enriched with professionals, provides one-to-one
          counselling in flexible time ranges, ensures securities through
          anonymity. We have short and long sessions based on your need and
          guided by specialists across various mental health domains.
        </p>
        <button
          className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          style={{ background: "rgb(24 56 99)" }}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}
