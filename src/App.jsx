import TopOffer from "./components/TopOffer";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import NavBar from "./components/NavBar";
import ImageSlider from "./components/ImageSlider";
// import X2 from "./components/x2";
import Headroom from "react-headroom";
import "./App.css";
import StudentPRofessionals from "./components/StudentProfessionals";

function App() {
  return (
    <>
      <div style={{ background: "#00B1B7" }}>
        <TopOffer />
        <Headroom>
          <NavBar />
        </Headroom>
        <Section1 />
      </div>

      <StudentPRofessionals/>
      <ImageSlider />
      <Section2 />
      {/* <X2 /> */}
      <Section3 />
    </>
  );
}

export default App;
