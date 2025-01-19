import Image from "next/image";
import { PiCoffeeBold } from "react-icons/pi";

interface MenuCardType {
    ImageSrc: string;
    ImageText: string;
    MealType: string;
    Dish1: string;
    DishDes1: string;
    DishCal1: number;
    DishPrice1: number;
    Dish2: string;
    DishDes2: string;
    DishCal2: number;
    DishPrice2: number;
    Dish3: string;
    DishDes3: string;
    DishCal3: number;
    DishPrice3: number;
    Dish4: string;
    DishDes4: string;
    DishCal4: number;
    DishPrice4: number;
}


export default function MenuCardRight({ImageSrc, ImageText, MealType, Dish1, DishDes1, DishCal1, DishPrice1, Dish2, DishDes2, DishCal2, DishPrice2, Dish3, DishDes3, DishCal3, DishPrice3, Dish4, DishDes4, DishCal4, DishPrice4}: MenuCardType) {
    return(
        <>
            <div className="container max-w-screen-lg mx-auto mt-16 grid grid-cols-5 md:grid-cols-12 grid-rows-[100px_100px_100px_100px_100px_100px_100px_100px_100px_100px] md:grid-rows-[100px_100px_100px_100px_100px] text-white">
                {/* Starter Menu */}
                <div className="col-span-3 md:col-span-4 col-start-1 row-start-1 flex flex-col justify-center md:justify-start">
                    <PiCoffeeBold className="text-[#FF9F0D]"/>
                    <h1 className="text-h5 lg:text-h3 text-[#333333] font-bold">{MealType}</h1>
                </div>
                {/* Starter Menu Row 2 */}
                <div className="col-span-4 col-start-1 row-start-2">
                    <h3 className="text-[#333333] hover:text-[#FF9F0D]">{Dish1}</h3>
                    <p className="text-sm text-[#4F4F4F]">{DishDes1}</p>
                    <p className="text-sm text-[#828282]">{DishCal1} CAL</p>
                </div>
                {/* Starter Menu Row 3 */}
                <div className="col-span-4 col-start-1 row-start-3">
                    <h3 className="text-[#333333] hover:text-[#FF9F0D]">{Dish2}</h3>
                    <p className="text-sm text-[#4F4F4F]">{DishDes2}</p>
                    <p className="text-sm text-[#828282]">{DishCal2} CAL</p>
                </div>
                {/* Starter Menu Row 4 */}
                <div className="col-span-4 col-start-1 row-start-4">
                    <h3 className="text-[#333333] hover:text-[#FF9F0D]">{Dish3}</h3>
                    <p className="text-sm text-[#4F4F4F]">{DishDes3}</p>
                    <p className="text-sm text-[#828282]">{DishCal3} CAL</p>
                </div>
                {/* Starter Menu Row 5 */}
                <div className="col-span-4 col-start-1 row-start-5">
                    <h3 className="text-[#333333] hover:text-[#FF9F0D]">{Dish4}</h3>
                    <p className="text-sm text-[#4F4F4F]">{DishDes4}</p>
                    <p className="text-sm text-[#828282]">{DishCal4} CAL</p>
                </div>
                {/* First Price Row 2 */}
                <div className="col-end-6 md:col-start-7 row-start-2 flex justify-end">
                    <p className="text-[#FF9F0D]">{DishPrice1}$</p>
                </div>
                {/* Second Price Row 3 */}
                <div className="col-end-6 md:col-start-7 row-start-3 flex justify-end">
                    <p className="text-[#FF9F0D]">{DishPrice2}$</p>
                </div>
                {/* Third Price Row 4 */}
                <div className="col-end-6 md:col-start-7 row-start-4 flex justify-end">
                    <p className="text-[#FF9F0D]">{DishPrice3}$</p>
                </div>
                {/* Fourth Price Row 5 */}
                <div className="col-end-6 md:col-start-7 row-start-5 flex justify-end">
                    <p className="text-[#FF9F0D]">{DishPrice4}$</p>
                </div>
                {/* Image section */}
                <div className="col-span-5 md:col-span-4 row-span-5 md:col-start-9 relative  hover:scale-105 transition duration-300">
                    <Image
                    className="object-cover"
                        src={ImageSrc}
                        alt={ImageText}
                        fill
                    
                    />
                </div>
            </div>
        </>
    )
}