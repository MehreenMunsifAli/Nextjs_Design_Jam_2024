import Link from "next/link";
import { FaRegArrowAltCircleRight } from "react-icons/fa";


export default function ShopNowCard() {
    return(
        <div className="h-full py-7 text-white bg-[url('/assets/images/shop/shop_now_card/Rectangle_8879.svg')] bg-cover bg-no-repeat flex flex-col justify-between">
            <div className="px-5 font-bold">
                <p>
                    Perfect Taste
                </p>
                <p className="text-lg">Classic Restaurant</p>
                <p className="mt-2 text-[#FF9F0D]">45.00$</p>
            </div>
            <Link href={"/"}>
                <div className="px-5 flex items-center">
                    <p className="mr-2">Shop Now</p>
                    <FaRegArrowAltCircleRight size={18} />
                </div>
            </Link>
        </div>
    )
}