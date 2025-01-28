import Image from "next/image";
import {Great_Vibes} from "next/font/google";
import Link from "next/link";

const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ["400","400"] });

export default function ActiveProcess() {

    return (
        <div className="container max-w-screen-[1280px] mx-auto my-16 py-12 text-white relative bg-white">
            <div
                className="absolute inset-0 bg-cover bg-no-repeat " 
                style={{backgroundImage: "url('/assets/images/activeprocess/unsplash_E6DsqnZbZ4o.svg')"}}>
            </div>
            {/* Content */}
            <div className="flex justify-center ">
            <div className="relative container max-w-screen-lg flex flex-col items-center lg:items-end z-50">
                <h1 className={`${greatVibes.className} text-[#FF9F0D] italic text-h5 lg:text-h4`}>Restaurant Active Process</h1>
                <h2 className="text-h5 lg:text-h3 font-bold leading-tight mt-2 whitespace-nowrap text-center lg:text-right">
                        <span className="text-[#FF9F0D]">We </span> Document Every Food
                         <br /> Bean Process untile it is saved
                </h2>
                <p className=" lg:max-w-[590px] my-8 text-center lg:text-right px-6 lg:px-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, 
                </p>
                  {/* Button  */}
                <div className="flex justify-between gap-6">
                    <button className="px-6 py-2 lg:px-10 lg:py-4 bg-transparent hover:bg-[#FF9F0D] border-2 border-[#FF9F0D] text-white rounded-full transition duration-300">
                        Read More
                    </button>
                    <Link href={"/"}>
                    <div className="flex items-center justify-between gap-2">
                        <Image 
                            className="object-cover"
                            src={"/assets/images/activeprocess/Play.svg"}
                            alt="Play Icon"
                            width={60}
                            height={60}
                        />
                        <p className="text-[16px]">Play Video</p>
                    </div>
                    </Link>
                </div>
            </div>
            </div>
        </div>
    )
}