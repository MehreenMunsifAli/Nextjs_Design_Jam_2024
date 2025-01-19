import Image from "next/image";
import { IoIosStar } from "react-icons/io";


interface LatestProductsType {
    ImagePath: string;
    ImageText: string;
    ImageWidth: number;
    ImageHeight?: number;
    DishName: string;
    Price?: number;
}

export default function LatestProductsCard({ImagePath, ImageText, ImageWidth, ImageHeight, DishName, Price}: LatestProductsType) {
    return(
        <div className="flex gap-3" >
            {/* <div className="relative "> */}
                <Image 
                    src={ImagePath}
                    alt={ImageText}
                    width={ImageWidth}
                    height={ImageHeight}
                    className="object-cover"
                />
            {/* </div> */}
            <div>
                <p className="text-sm">{DishName}</p>
                <div className="flex">
                    <IoIosStar className="text-[#FF9F0D] text-xs" />
                    <IoIosStar className="text-[#FF9F0D] text-xs" />
                    <IoIosStar className="text-[#E0E0E0] text-xs" />
                    <IoIosStar className="text-[#E0E0E0] text-xs" />
                    <IoIosStar className="text-[#E0E0E0] text-xs" />
                </div>
                {Price && <p className="text-sm">${Price}</p>}
            </div>
        </div>
    )
}