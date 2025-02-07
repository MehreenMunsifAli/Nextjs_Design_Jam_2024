import Image from "next/image";
import {Great_Vibes} from "next/font/google";
import { PiQuotesThin } from "react-icons/pi";
import { IoIosStar } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ["400","400"] });

export default function Testimonials() {

    return(
        <div className="container max-w-screen-lg mx-auto my-16 text-white ">
            {/* Top Content */}
            <div className="lg:text-left text-center">
                <h1 className={`${greatVibes.className} text-[#FF9F0D] italic text-h5 lg:text-h4`}>Testimonials</h1>
                <h2 className="text-h4 lg:text-h3 font-bold leading-tight mt-2">
                        What our clients are saying
                </h2>
            </div>

            {/* Card Content */}
            <div className="flex justify-center items-center mx-auto mt-32 text-black">
                <div className="relative bg-white max-w-[540px] lg:max-w-[670px] px-6 lg:px-20">
                    <div className="absolute w-[133px] h-[134px] -top-16 left-1/2 transform -translate-x-1/2">
                        <Image
                            src={"/assets/images/testimonial/Ellipse_6.svg"}
                            alt="bacground-image"
                            fill
                        />    
                    </div>
                    
                    {/* <div className="absolute inset-0 bg-contain bg-no-repeat" style={{
                        backgroundImage: "url('/assets/images/testimonial/unsplash_Ioq6qEibtbU.svg')",
                        }}>
                    </div> */}
                    <div className="flex flex-col items-center text-center pt-24 pb-8">
                        <PiQuotesThin className="text-[#FF9F0D] text-2xl lg:text-3xl" />
                        <p className="text-[14px] lg:text-[16px] my-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                        <div className="flex">
                            <IoIosStar className="text-[#FF9F0D] text-[24px]" />
                            <IoIosStar className="text-[#FF9F0D] text-[24px]" />
                            <IoIosStar className="text-[#FF9F0D] text-[24px]" />
                            <IoIosStar className="text-[#FF9F0D] text-[24px]" />
                            <IoIosStar className="text-[#E0E0E0] text-[24px]" />
                        </div>
                        <p className="text-lg lg:text-h5 font-bold mt-4 mb-2">Alamin Hassan</p>
                        <p className="text-[#828282]">Food Specialist</p>
                    </div>
                </div>
            </div>
            
            {/* Dots */}
            <div className="flex justify-center mt-8">
                <GoDotFill className="text-[#FF9F0D] text-lg lg:text-2xl"/>
                <GoDotFill className="text-[#FF9F0D] opacity-30 text-lg lg:text-2xl"/>
                <GoDotFill className="text-[#FF9F0D] opacity-30 text-lg lg:text-2xl"/>
                <GoDotFill className="text-[#FF9F0D] opacity-30 text-lg lg:text-2xl"/>
            </div>
        </div>
    );
}