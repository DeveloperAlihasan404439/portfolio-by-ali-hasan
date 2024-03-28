import banner from "../../assets/banner.png";
import banner2 from "../../assets/banner2.png";
import Image from "next/image";
import BannerDiscription from "./BannerDiscription";
export default function Banner() {
  return (
    <div>
      <div className="block md:hidden">
        <Image
          width={800}
          height={600}
          alt="banner portfolio"
          src={banner2}
          className="w-full md:h-[90vh]"
        />
        <div
          className=" w-11/12 mx-auto
        flex items-center text-[#FFF] my-10"
        >
          <BannerDiscription />
        </div>
      </div>
      <div className="hidden md:block relative">
        <Image
          width={800}
          height={800}
          alt="banner portfolio"
          src={banner}
          className="w-full h-[90vh]"
        />
        <div
          className="absolute top-0 left-0 w-[50%]
        flex items-center h-full text-[#FFF]"
        >
          <BannerDiscription />
        </div>
      </div>
    </div>
  );
}
