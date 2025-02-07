import Image from "next/image";
import { Great_Vibes } from "next/font/google";
import Link from "next/link";
import MenuItem from "./MenuItem";

const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ["400", "400"] });

export default function Menu() {

    return (
        <div className="container max-w-screen-lg mx-auto my-16 text-white  ">
            {/* Top Content */}
            <div className="flex flex-col justify-center items-center">
                <h1 className={`${greatVibes.className} text-[#FF9F0D] italic text-h5 lg:text-h4`}>Choose & Pick</h1>
                <h2 className="text-h4 lg:text-h3 font-bold leading-tight mt-2 whitespace-nowrap">
                    <span className="text-[#FF9F0D]">Fr</span>om Our Menu
                </h2>
            </div>

            <ul className="flex flex-wrap justify-center lg:justify-start items-center text-[20px] gap-x-8 lg:gap-x-20 my-16">
                <li className="hover:text-[#FF9F0D]">
                    <Link href={"/"}>Breakfast</Link>
                </li>
                <li className="hover:text-[#FF9F0D]">
                    <Link href={"/"}>Lunch</Link>
                </li>
                <li className="hover:text-[#FF9F0D]">
                    <Link href={"/"}>Dinner</Link>
                </li>
                <li className="hover:text-[#FF9F0D]">
                    <Link href={"/"}>Dessert</Link>
                </li>
                <li className="hover:text-[#FF9F0D]">
                    <Link href={"/"}>Drink</Link>
                </li>
                <li className="hover:text-[#FF9F0D]">
                    <Link href={"/"}>Snack</Link>
                </li>
                <li className="hover:text-[#FF9F0D]">
                    <Link href={"/"}>Soups</Link>
                </li>
            </ul>

            {/* Images Content */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 lg:items-stretch flex-wrap lg:flex-nowrap ">
                <div className="">
                    <div className="relative w-[370px] h-[320px] ">
                        <Image
                            className="object-cover"
                            src={"/assets/images/menu/unsplash_INjdgkCwHp0.svg"}
                            alt="Salad Image"
                            fill
                        />
                    </div>
                </div>
                <div className="flex flex-wrap justify-center lg:items-stretch lg:justify-between gap-x-2 gap-y-4 lg:gap-y-0 ">
                    <MenuItem ImageSrc="/assets/images/menu/unsplash_OFismyezPnY.svg" AltText="Meat Dish" MenuItem="Lettuce Leaf" MenuDescription="Lacus nisi, et ac dapibus velit in consequat." MenuPrice={12.5} ComponentWidth={310} ImageWidth={70} ImageHeight={70} />
                    <MenuItem ImageSrc="/assets/images/menu/unsplash_-GFCYhoRe48.svg" AltText="Meat Dish" MenuItem="Lettuce Leaf" MenuDescription="Lacus nisi, et ac dapibus velit in consequat." MenuPrice={12.5} ComponentWidth={310} ImageWidth={70} ImageHeight={70} />
                    <MenuItem ImageSrc="/assets/images/menu/unsplash_Yr4n8O_3UPc.svg" AltText="Meat Dish" MenuItem="Lettuce Leaf" MenuDescription="Lacus nisi, et ac dapibus velit in consequat." MenuPrice={12.5} ComponentWidth={310} ImageWidth={70} ImageHeight={70} />
                    <MenuItem ImageSrc="/assets/images/menu/unsplash_W9OKrxBqiZA.svg" AltText="Meat Dish" MenuItem="Lettuce Leaf" MenuDescription="Lacus nisi, et ac dapibus velit in consequat." MenuPrice={12.5} ComponentWidth={310} ImageWidth={70} ImageHeight={70} />
                    <MenuItem ImageSrc="/assets/images/menu/unsplash_ZqREbckCRQA.svg" AltText="Meat Dish" MenuItem="Lettuce Leaf" MenuDescription="Lacus nisi, et ac dapibus velit in consequat." MenuPrice={12.5} ComponentWidth={310} ImageWidth={70} ImageHeight={70} />
                    <MenuItem ImageSrc="/assets/images/menu/unsplash_cLpdEA23Z44.svg" AltText="Meat Dish" MenuItem="Lettuce Leaf" MenuDescription="Lacus nisi, et ac dapibus velit in consequat." MenuPrice={12.5} ComponentWidth={310} ImageWidth={70} ImageHeight={70} />
                    <MenuItem ImageSrc="/assets/images/menu/unsplash_mAQZ3X_8_l0.svg" AltText="Meat Dish" MenuItem="Lettuce Leaf" MenuDescription="Lacus nisi, et ac dapibus velit in consequat." MenuPrice={12.5} ComponentWidth={310} ImageWidth={70} ImageHeight={70} />
                    <MenuItem ImageSrc="/assets/images/menu/unsplash_dphM2U1xq0U.svg" AltText="Meat Dish" MenuItem="Lettuce Leaf" MenuDescription="Lacus nisi, et ac dapibus velit in consequat." MenuPrice={12.5} ComponentWidth={310} ImageWidth={70} ImageHeight={70} />
                </div>

            </div>
        </div>
    );
}