import Image from "next/image";
import SocialIcon from "./SocialIcon";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";
import Link from "next/link";
import Rectangle from "./Rectangle";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Footer() {

    return(
        <>
        <div className="container max-w-screen-lg mx-auto  text-white mt-16 mb-8">
            
            {/* Support content */}
            <div className="lg:w-[85%] mx-auto pb-8 lg:pb-12 mb-4 flex flex-col lg:flex-row items-center justify-between border-b-[1px] border-[#FF9F0D]">
                {/* Left Content */}
                <div className="text-center lg:text-left">
                    <h4 className="text-xl lg:text-2xl text-[#FF9F0D]">St<span className="text-white">ill You Need Our Support?</span></h4>
                    <p className="text-[16px] mt-4 mb-2 lg:mb-0">Don’t wait make a smart & logical quote here. Its pretty easy.</p>
                </div>
                {/* Right Content */}
                <div className=" flex ">
                    <Input
                        type="email"
                        placeholder="Enter Your Email"
                        className="bg-[#FF9F0D] placeholder-white pl-4 py-6 rounded-sm rounded-r-none border-none "
                    />
                    <Button type="button" className="py-6 bg-white hover:bg-gray-700 transition duration-300 text-[#FF9F0D] w-[163px] rounded-sm rounded-l-none">Subscribe Now</Button>
                </div>
            </div>

            {/* Links */}
            <div className="gap-16 mt-16 text-white text-center flex flex-col lg:flex-row items-center lg:items-start justify-between">
                {/* About us */}
                <div className="lg:w-1/4 flex flex-col items-center lg:items-start ">
                    <h5 className="text-xl font-bold">About Us.</h5>
                    <p className="w-2/3 lg:w-full lg:px-0 mt-6 mb-4 text-xs text-center lg:text-left">
                    orporate clients and leisure travelers has
                    been relying on Groundlink for dependab
                    safe, and professional chauffeured car
                    service in major cities across World.
                    </p>
                    <div className="flex mt-2 gap-4 flex-col lg:flex-row items-center">
                        <Rectangle ImageSrc="/assets/images/ClockClockwise.png" AltText="Clock Image" ComponentWidth="68px" IconWidth={40} IconHeight={40} />
                        <div className="text-center lg:text-left">
                            <p className="text-sm">Opening Hours</p>
                            <p className="text-xs">Mon - Sat (8.00 - 6.00)</p>
                            <p className="text-xs">Sunday - Closed</p>
                        </div>
                    </div>
                    
                </div>

                {/* Useful Links */}
                <div className=" text-center lg:text-left">
                    <h5 className="text-xl font-bold">Useful Links</h5>
                    <ul className="mt-6">
                        <li className="mb-6"><Link href={"/"}>About</Link></li>
                        <li className="mb-6"><Link href={"/"}>News</Link></li>
                        <li className="mb-6"><Link href={"/"}>Partners</Link></li>
                        <li className="mb-6"><Link href={"/"}>Team</Link></li>
                        <li className="mb-6"><Link href={"/"}>Menu</Link></li>
                        <li className="mb-6"><Link href={"/"}>Contacts</Link></li>
                    </ul>
                </div>

                 {/* Help */}
                 <div className=" text-center lg:text-left">
                    <h5 className="text-xl font-bold">Help?</h5>
                    <ul className="mt-6 ">
                        <li className="mb-6"><Link href={"/"}>FAQ</Link></li>
                        <li className="mb-6"><Link href={"/"}>Term & conditions</Link></li>
                        <li className="mb-6"><Link href={"/"}>Reporting</Link></li>
                        <li className="mb-6"><Link href={"/"}>Documentation</Link></li>
                        <li className="mb-6"><Link href={"/"}>Support Policy</Link></li>
                        <li className="mb-6"><Link href={"/"}>Privacy</Link></li>
                    </ul>
                </div>

                {/* Recent Post */}
                <div className=" flex flex-col gap-1 items-center lg:items-start">
                    <h5 className="text-xl font-bold">Recent Post</h5>
                    <Link href={"/"}>
                        <div className=" flex gap-4 mt-6 overflow-hidden items-end bg-transparent">
                            <div className="relative w-[49px] h-[49px] ">
                                <Image 
                                    src={"/assets/images/unsplash_CLMpC9UhyTo.png"}
                                    alt="Mask Image"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                    className="object-cover"
                                />
                            </div>
                            <div className="text-left">
                                <p className="text-neutral-500">20 Feb 2022</p>
                                <p>Keep Your Business</p>
                            </div>
                        </div>
                    </Link>
                    <Link href={"/"}>
                        <div className=" flex gap-4 mt-4 overflow-hidden items-end bg-transparent">
                            <div className="relative w-[49px] h-[49px] ">
                                <Image 
                                    src={"/assets/images/unsplash_CRoAeTh5S_I.png"}
                                    alt="Mask Image"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                    className="object-cover"
                                />
                            </div>
                            <div className="text-left">
                                <p className="text-neutral-500">20 Feb 2022</p>
                                <p>Keep Your Business</p>
                            </div>
                        </div>
                    </Link>
                    <Link href={"/"}>
                        <div className=" flex gap-4 mt-4 overflow-hidden items-end bg-transparent">
                            <div className="relative w-[49px] h-[49px] ">
                                <Image 
                                    src={"/assets/images/Mask_Group.png"}
                                    alt="Mask Image"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                    className="object-cover"
                                />
                            </div>
                            <div className="text-left">
                                <p className="text-neutral-500">20 Feb 2022</p>
                                <p>Keep Your Business</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
           
        </div>
         {/* End */}
         <div className="bg-[#FF9F0D]">
        <footer className="container max-w-screen-lg mx-auto py-4 flex flex-col lg:flex-row lg:justify-between justify-around items-center gap-2 text-white">
            <p className="text-[16px]">
                Copyright &copy; 2022 by Ayeman. All Rights Reserved.  
            </p>
            <div className="w-[180px] flex justify-between gap-2">
                <SocialIcon Icon={FaFacebookF} Url="https://facebook.com" />
                <SocialIcon Icon={FaTwitter} Url="https://twitter.com" />
                <SocialIcon Icon={FaInstagram} Url="https://instagram.com" />
                <SocialIcon Icon={FaYoutube} Url="https://youtube.com" Color="#FF9F0D" />
                <SocialIcon Icon={FaPinterest} Url="https://pinterest.com" />
            </div>
        </footer>
        </div>
        </>
    )
}