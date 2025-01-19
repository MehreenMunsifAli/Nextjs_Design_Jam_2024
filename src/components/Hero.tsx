
import Image from "next/image";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter, FaPinterestP } from "react-icons/fa";
import {Great_Vibes} from "next/font/google";
import Link from "next/link";


const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ["400","400"] });

export default function Hero() {
    return (
        <div className="container max-w-screen-lg mx-auto mb-16">
            <div className=" mt-16 lg:mt-0 mb-12 text-white flex flex-col items-center lg:flex-row justify-between relative">
                {/* Social Icons */}
                <div className=" hidden lg:flex flex-col items-center space-y-6 absolute left-[-3%] top-[7%]">
                    <div className="border-l-2 h-[158px]"></div>
                    <Link href={"https://www.facebook.com"}>
                        <RiFacebookFill className="cursor-pointer"/>
                    </Link>
                    <Link href={"https://www.twitter.com"}>
                        <FaTwitter className="text-[#FF9F0D] cursor-pointer"/>
                    </Link>
                    <Link href={"https://www.pinterest.com"}>
                        <FaPinterestP className="cursor-pointer"/>
                    </Link>
                    <div className="mt-[300px] border-l-2 h-[158px]"></div>
                </div>
                {/* -- Social Icons End Here -- */}

                {/* Left Content */}
                <div className=" mt-0 text-center lg:text-left ">
                    <h1 className={`${greatVibes.className} text-[#FF9F0D] italic text-h5 lg:text-h4`}>It&apos;s Quick & Amusing!</h1>
                    <h1 className="lg:max-w-[472px] text-h4 lg:text-h3 font-bold leading-tight mt-2 whitespace-nowrap text-center lg:text-left">
                        <span className="text-[#FF9F0D] ">Th</span>e Art of Speed <br /> Food Quality
                    </h1>
                    <p className=" mx-auto lg:mx-0 mt-4 px-6 lg:px-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
                        pharetra dictum neque massa congue.
                    </p>
                    <button className="mt-8 px-6 py-2 lg:px-12 lg:py-4 bg-[#FF9F0D] text-white font-semibold rounded-full hover:bg-transparent hover:border-2 hover:px-[22px] hover:py-[6px] lg:hover:px-[46px] lg:hover:py-[14px] hover:border-[#FF9F0D] transition duration-300">
                        See Menu
                    </button>
                </div>
                {/* Right Content */}
                <div className="  flex justify-center lg:justify-end">
                    <div className="relative mt-4 w-[400px] h-[300px] lg:w-[600px] lg:h-[450px] lg:-right-24">
                    <Image
                        alt="Food Plate"
                        src={"/assets/images/hero/hero.svg"}
                        fill
                        priority={true}
                        className="object-cover"
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}

