// import imageCover from "../assets/ImageCover2.jpg";
// import imageCover from "../assets/WhatsApp Image 2025-03-07 at 12.18.25_393eefdd.jpg";
import imageCover from "../assets/878be58409752eaee299b32562ef23b8.jpg";
import logo from "../assets/mononLogo-removebg-preview.png";
import style from "../styles/Section2.module.css";

export default function Section2() {

  const StyleMonon = {
    // position: "absolute",
    /*top: "0%",
    left: "0%",*/
    // transform: "translate(-50%, -50%)",
    width : "900px",
    height : "450px",
    backgroundImage: `url(${imageCover})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    //backgroundColor: "#00000080",
    //backgroundBlendMode: "multiply",
    // opacity: "0.7",
    display: "flex",
    /*justifyContent: "center",
    alignItems: "center",
    color: "#ffffff",
    fontSize: "2rem",
    borderRadius: "10px",
    padding: "1rem",
    cursor: "pointer",*/
    transition: "all 0.3s ease",
  };


  return (
    <div className={` ${style.imageContainer}`}>
      <div className="flex items-center justify-center overflow-hidden m-auto my-6 p-3 rounded-lg" style={StyleMonon}>
        {/* <img
          src={imageCover}
          alt="Description"
          className="w-full h-full object-contain"
        /> */}
        <div className="flex items-center justify-center w-[95%] mx-auto rounded-lg text-[rgb(17,31,32)] overflow-hidden">
      {/* Image Section (60%) */}
      <div className="w-[40%]">
        <div
          className=""
        >
          <img
            src={logo}
            alt="Logo"
            className=" object-cover"
            //style={{ backgroundImage: `url(${imageCover})`,"z-index": "1" }}
          />
        </div>
      </div>


      {/* Text Section (40%) */}
      <div className="w-[60%] p-6 flex flex-col justify-center text-left">
        <h2 className="text-3xl text-[rgb(17,31,32)] font-semibold">
          To break the taboo around mental health and build a mental health aware Nation.
        </h2>
        <p className="mt-3 "> "Monon – a platform dedicated to the nation's mental well-being. We offer personalized mental health care and career mentoring to combat stigma, lack of education, and inadequate guidance. With minimal government and private initiatives, we drive change through professional partnerships, ensuring empowerment and privacy."</p>
      </div>
    </div>
      </div>
    </div>
  );
}
