import imageCover from '../assets/imageCover.jpg';


export default function Section2() {
  return (
    <div
      className="pl-32 pr-32 "
      
    >
      <div className="col-span-5 h-full flex items-center justify-center overflow-hidden">
        <img
          src={imageCover}
          alt="Description"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}