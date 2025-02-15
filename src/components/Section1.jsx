import image1 from "../assets/image1.jpg";

export default function Section1() {
  return (
    <div
      className="grid grid-cols-12 max-h-[55vh] h-[55vh] pl-8 pr-8"
      style={{ background: "#00B1B7" }}
    >
        {/* <img src="" alt="logo" />  */}
        
      {/* Left Column */}
      <div className="col-span-5 h-full flex items-center justify-center overflow-hidden">
        <img
          src={image1}
          alt="Description"
          className="w-full h-full object-scale-down"
        />
      </div>

      {/* Right Column */}
      <div className="col-span-7 h-full flex flex-col items-start justify-center text-black p-8">
        <h1 className="text-3xl text-left">Welcome to Monon!</h1>
        <p className=" text-left">No more dark nights, the light is on you.</p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
}
