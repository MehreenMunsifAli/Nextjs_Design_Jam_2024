import Image from "next/image";
import {Great_Vibes} from "next/font/google";

const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ["400","400"] });

export default function FoodCategory() {

    return(
        <div className="container max-w-screen-lg mx-auto my-16 text-white flex flex-col justify-center items-center ">
            {/* Top Content */}
            <div className="text-center">
                <h1 className={`${greatVibes.className} text-[#FF9F0D] italic text-h5 lg:text-h4`}>Food Category</h1>
                <h2 className="text-h4 lg:text-h3 font-bold leading-tight mt-2 whitespace-nowrap">
                        <span className="text-[#FF9F0D]">Ch</span>oose Food Item
                </h2>
            </div>

            {/* Images Content */}
            <div className="container flex flex-col lg:flex-row justify-between items-center flex-wrap lg:flex-nowrap my-16 gap-4 ">
                {/* Single image with save 30% div */}
                <div className="relative w-[264px] md:w-[244px] h-[294px] hover:scale-105 transition duration-300">
                    <Image
                        className="object-contain rounded-md"
                        src={"/assets/images/food_category/unsplash_-lHZUkiWM74.svg"}
                        alt="Eggs Image"
                        fill
                    />
                    <div className="absolute inset-y-1/3 md:inset-y-24 text-center flex flex-col items-end gap-4">
                        <div className="px-8 py-3 md:px-4 md:py-2 bg-white text-[#FF9F0D] flex items-center justify-center rounded-lg">
                            <p className="text-2xl md:text-[18px] font-bold">Save 30%</p>
                        </div>
                        <div className="px-8 py-3 md:px-4 md:py-2 text-white bg-[#FF9F0D] flex items-center justify-center rounded-lg">
                            <p className="text-2xl md:text-[20px] font-bold">Fast Food Dish</p>
                        </div>
                    </div>

                </div>
                
                <div className=" relative w-[264px] md:w-[244px] h-[294px] hover:scale-105 transition duration-300">
                    <Image
                        className="object-contain rounded-md"
                        src={"/assets/images/food_category/unsplash_dphM2U1xq0U.svg"}
                        alt="Main Course Image"
                        fill
                    />
                </div>

                <div className=" relative w-[264px] md:w-[244px] h-[294px] hover:scale-105 transition duration-300">
                    <Image
                        className="object-contain rounded-md"
                        src={"/assets/images/food_category/unsplash_MRHyv-hHxgk.svg"}
                        alt="Main Course Image"
                        fill
                    />
                </div>
                
                <div className=" relative w-[264px] md:w-[244px] h-[294px] hover:scale-105 transition duration-300">
                    <Image
                        className="object-contain rounded-md"
                        src={"/assets/images/food_category/unsplash_q54Oxq44MZs.svg"}
                        alt="Sandwich"
                        fill
                    />
                </div>
            </div>
        </div>
    );
}