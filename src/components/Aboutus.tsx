import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import {Great_Vibes} from "next/font/google";

const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ["400","400"] });

export default function Aboutus() {

    return(
        <div id="aboutus" className="container max-w-screen-lg mx-auto my-16 text-white flex lg:flex-row flex-col items-center lg:items-start justify-between gap-12">
            {/* Left Content */}
            <div className="flex flex-col items-center lg:items-start">
                <h1 className={`${greatVibes.className} text-[#FF9F0D] italic text-h5 lg:text-h4`}>About us</h1>
                <h2 className="w-[472px] text-h4 lg:text-h3 font-bold leading-tight mt-2 whitespace-nowrap text-center lg:text-left">
                        <span className="text-[#FF9F0D]">We </span> Create the best <br /> foody product
                </h2>
                <p className="w-2/3 lg:w-[526px] text-[16px] my-8 text-center lg:text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                </p>
                <div className="mb-4">
                    <FaCheck className="inline mr-2" />
                    <span> Lacus nisi, et ac dapibus sit eu velit in consequat.</span>
                </div>
                <div className="mb-4 text-wrap">
                    <FaCheck className="inline mr-2" />
                    <span>  Quisque diam pellentesque bibendum non dui volutpat fringilla </span>
                </div>
                <div className="mb-4">
                    <FaCheck className="inline mr-2" />
                    <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                </div>
                <button className="mt-8 px-6 py-2 lg:px-12 lg:py-4 bg-[#FF9F0D] text-white font-semibold rounded-full hover:bg-transparent hover:border-2 hover:px-[22px] hover:py-[6px] lg:hover:px-[46px] lg:hover:py-[14px] hover:border-[#FF9F0D] transition duration-300">
                    Read More
                </button>
            </div>

            {/* Right Content */}
            <div className="overflow-hidden">
                <div className="relative w-[360px] h-[230px] lg:w-[660px] lg:h-[310px] ">
                    <Image
                        className="object-cover"
                        src={"/assets/images/unsplash_fdlZBWIP0aM.png"}
                        alt="Eggs Image"
                        fill
                        sizes="(max-width: 768px) 33vw, (max-width: 1280px) 50vw"
                    />
                </div>
                
                <div className="flex justify-normal mt-3">
                    <div className="relative w-[180px] h-[120px] lg:w-[322px] lg:h-[194px] ">
                        <Image
                            src={"/assets/images/unsplash_jpkfc5_d-DI.png"}
                            alt="Main Course Image"
                            fill
                            sizes="(max-width: 768px) 33vw, (max-width: 1280px) 40vw"
                        />
                    </div>
                    <div className="relative w-[180px] h-[120px] lg:w-[322px] lg:h-[194px]">
                        <Image
                        className="ml-3"
                            src={"/assets/images/unsplash_mAQZ3X_8_l0.png"}
                            alt="Sandwich"
                            fill
                            sizes="(max-width: 768px) 33vw, (max-width: 1280px) 40vw"
                        />
                    </div>
                </div>
                
            </div>
        </div>
    )
}