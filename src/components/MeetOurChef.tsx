import Link from "next/link";
import ChefCard from "./ChefCard";
import {Great_Vibes} from "next/font/google";

const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ["400","400"] });

export default function MeetOurChef() {

    return(
        <div className="container max-w-screen-lg mx-auto my-16 text-white ">
            {/* Top Content */}
            <div className="text-center">
                <h1 className={`${greatVibes.className} text-[#FF9F0D] italic text-h5 lg:text-h4`}>Chefs</h1>
                <h2 className="text-h4 lg:text-h3 font-bold leading-tight mt-2 whitespace-nowrap">
                        <span className="text-[#FF9F0D]">Me</span>et Our Chef
                </h2>
            </div>

            {/* Images Content */}
            <div className=" flex justify-center lg:justify-between items-center flex-wrap lg:flex-nowrap my-16 gap-6">
                <ChefCard ImagePath="/assets/images/chefs/Rectangle_88631.svg" AltText="Chef working" ChefName="D.Estwood" ChefTitle="Chief Chef" />
                <ChefCard ImagePath="/assets/images/chefs/Rectangle_88632.svg" AltText="Chef working" ChefName="D.Scoriesh" ChefTitle="Assistant Chef" />
                <ChefCard ImagePath="/assets/images/chefs/Rectangle_88633.svg" AltText="Chef working" ChefName="M. William" ChefTitle="Advertising Chef" />
                <ChefCard ImagePath="/assets/images/chefs/Rectangle_88634.svg" AltText="Chef working" ChefName="W.Readfroad" ChefTitle="Chef" />
            </div>

            {/* Button  */}
            <Link href={"/ourchef"} className="flex justify-center">
                <button className="px-6 py-2 lg:px-12 lg:py-4 bg-transparent hover:bg-[#FF9F0D] border-2 border-[#FF9F0D] text-white rounded-full transition duration-300">
                    See More
                </button>
            </Link>
            
        </div>
    );
}