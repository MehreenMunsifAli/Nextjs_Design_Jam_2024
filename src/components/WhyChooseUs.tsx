import Image from "next/image";
import {Great_Vibes} from "next/font/google";
import Rectangle from "./Rectangle";

const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ["400","400"] });

export default function WhyChooseUs() {

    return(
        <div className="container max-w-screen-lg mx-auto my-16 text-white flex justify-between gap-8">
            {/* Left Content */}
            <div className="hidden lg:block">
                {/* Top Row */}
                <div className=" gap-4 flex items-end ">
                    <div className="relative w-[280px] h-[285px] max-w-[362px] max-h-[356px]">
                        <Image
                            src="/assets/images/unsplash_lP5MCM6nZ5A.png"
                            alt="Food Image"
                            fill
                            className="object-cover rounded-lg"
                            sizes="(max-width: 768px) 40vw, (max-width: 1280px) 50vw"
                        />
                    </div>
                    <div className="relative w-[215px] h-[185px] max-w-[281px] max-h-[231px]">
                        <Image
                            src="/assets/images/unsplash_dphM2U1xq0U.png"
                            alt="Food Image"
                            fill
                            className="object-cover rounded-lg "
                            sizes="(max-width: 768px) 40vw, (max-width: 1280px) 50vw"
                        />
                    </div>
                </div>

                {/* Second Row */}
                <div className="mt-4 overflow-hidden gap-4 flex items-start">
                    <div className="relative w-[185px] h-[245px] max-w-[244px] max-h-[306px] ">
                        <Image
                            src={"/assets/images/unsplash_CLMpC9UhyTo.png"}
                            alt="Main Course Image"
                            fill
                            className="object-cover rounded-lg"
                            sizes="(max-width: 768px) 40vw, (max-width: 1280px) 50vw"
                        />
                    </div>
                    <div className="relative w-[167px] h-[181px] max-w-[221px] max-h-[226px] ">
                        <Image
                            src={"/assets/images/unsplash_-GFCYhoRe48.png"}
                            alt="Main Course Image"
                            fill
                            className="object-cover rounded-lg"
                            sizes="(max-width: 768px) 40vw, (max-width: 1280px) 50vw"
                        />
                    </div>
                    <div className=" overflow-hidden gap-2 flex flex-col">
                        <div className="relative w-[127px] h-[134px] max-w-[161px] max-h-[168px] ">
                            <Image
                                src={"/assets/images/unsplash_tzl1UCXg5Es.png"}
                                alt="Main Course Image"
                                fill
                                className="object-cover rounded-lg"
                                sizes="(max-width: 768px) 40vw, (max-width: 1280px) 50vw"
                            />
                        </div>
                        <div className="relative w-[127px] h-[134px] max-w-[161px] max-h-[166px]">
                            <Image
                                src={"/assets/images/unsplash_mmnKI8kMxpc.png"}
                                alt="Main Course Image"
                                fill
                                className="object-cover rounded-lg"
                                sizes="(max-width: 768px) 40vw, (max-width: 1280px) 50vw"
                            />
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
            {/* Right Content */}
            <div className="flex flex-col items-center lg:items-start ">
                <h1 className={`${greatVibes.className} text-[#FF9F0D] italic text-h5 lg:text-h4`}>Why Choose us</h1>
                <h2 className="text-h4 lg:text-h3 font-bold leading-tight mt-2 whitespace-nowrap text-center lg:text-left">
                        <span className="text-[#FF9F0D]">Ex</span>tra Ordinary taste <br /> And Experienced
                </h2>
                <p className="my-8 text-center lg:text-left px-6 lg:px-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                </p>

                <div className="w-[374px] h-[135px] text-white flex justify-between my-8 lg:my-0">
                    <Rectangle ImageSrc="/assets/images/Hamburger.png" AltText="Hamburger Icon" Label="Fast Food" />
                    <Rectangle ImageSrc="/assets/images/Cookie.png" AltText="Cookie Icon" Label="Lunch" />
                    <Rectangle ImageSrc="/assets/images/Wine.png" AltText="Wine Icon" Label="Dinner" />
                </div>
                
                <div className="w-[374px] h-[93px] bg-white text-black rounded-[6px] border-l-[10px] border-[#FF9F0D] mt-8 flex items-center justify-around">
                    <h2 className="text-[#FF9F0D] text-[48px]">30+</h2>
                    <p className="text-[20px]">Years of <br /><span className="text-[24px] font-bold">Experience</span> </p>
                </div>
            </div> 
        </div>
    )
}