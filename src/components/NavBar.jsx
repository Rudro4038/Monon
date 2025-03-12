import React from "react";
import logo from "../assets/mononLogo-removebg-preview.png";

const NavBar = () => {
  const logoStyle = {
    margin: "0px 0px 0px 10px",
    width: "160px",
    height: "40px",
    display: "inline",
  };

  const ButtonStyle = {
    // background: "#00B1B7",
    color: "rgb(17,31,32)",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  }

  return (
    <div className="" style={{ background:"#00B1B7" }}>
      <nav>
        <ul
          className="flex justify-end items-center gap-8 font-bold"
          style={{ color: "#173132", margin: "0px auto" }}
        >
          {/* <li className="position-relative">
            
          </li> */}
          <li  className="flex-grow text-left pt-2 p-1 cursor-pointer">
            <img src={logo} alt="logo" style={logoStyle} />
          </li>
          {/* <li  className="cursor-pointer">Home</li> */}
          <li className="cursor-pointer" style={ButtonStyle}>Services</li>
          <li className="cursor-pointer">Events</li>
          <li className="cursor-pointer">Supports</li>
          <li className="pr-4 cursor-pointer">Log In</li>
        </ul>
        {/* <hr style={{ height: "0px", color: "rgb(0, 86, 89)", width: "100%" }} /> */}
      </nav>
    </div>
  );
};

export default NavBar;
