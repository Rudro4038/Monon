
export default function Section3() {
  return (
    <div
      className="grid grid-cols-12 max-h-[55vh] h-[55vh] pl-8 pr-8"
      style={{ background: "#003D3F" }}
    >
      {/* Left Column */}
      <div className="col-span-4 h-full overflow-hidden pt-12">
        <h2 className="block text-left text-bold font-extrabold text-black">
          Contact Us
        </h2>
        <div className="w-full text-black flex  items-center font-medium">
          <span className="material-icons">phone_in_talk</span>+8801772694038
        </div>
        <div className="w-full text-black flex  items-center font-medium">
          <span className="material-icons">mail</span>monon@support.com
        </div>
        <div className="w-full text-black flex  items-center font-medium">
          <i className="fa-brands fa-whatsapp"></i>+8801772694038
        </div>
      </div>

      {/* Center Column */}
      <div className="col-span-4 h-full overflow-hidden pt-12">
        <h2 className="block text-left text-bold font-extrabold text-black">
          Social Media
        </h2>
        <div className="w-full h-16 text-black font-medium  text-left">
          <div className="inline m-2"> <i className="fa-brands fa-facebook"></i></div>

          {/* Column 2 */}
          <div className="inline m-2"><i className="fa-brands fa-square-instagram"></i></div>

          {/* Column 3 */}
          <div className="inline m-2"><i className="fa-brands fa-youtube"></i></div>
        </div>
      </div>

      {/* Right Column
      <div className="col-span-4 h-full flex flex-col items-start justify-center text-black p-8">
        <NewsLetterBox />
      </div> */}
    </div>
  );
}
