import "./Loading2.css";
import images from "../../../assets/ali.jpg";
import Image from "next/image";
function Loading2() {
  return (
    <div className="loading2">
      <div className="loading2_container">
        <div className="rings"></div>
        <div className="rings"></div>
        <div className="rings"></div>
        <span className="relative flex">
          <span className="animate-ping absolute opacity-75">
          <Image
            width={200}
            height={200}
            src={images}
            alt="ali hasan"
            className="w-16 h-16 rounded-full "
          />
          </span>
          <span className="relative inline-flex">
          <Image
            width={200}
            height={200}
            src={images}
            alt="ali hasan"
            className="w-16 h-16 rounded-full"
            title="Loading..."
          />
          </span>
        </span>
      </div>
    </div>
  );
}

export default Loading2;
