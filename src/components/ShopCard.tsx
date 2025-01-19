import Image from "next/image";


interface ShopCardType {
    id?: number;
    ImagePath: string;
    AltText: string;
    ImageWidth?: number;
    ImageHeight?: number;
    CurrentPrice: number;
    OldPrice?: number;
    DishName: string;
}

export default function ShopCard({ ImagePath, ImageHeight, ImageWidth, AltText, CurrentPrice, DishName, OldPrice}: ShopCardType) {
    return(
        <div className=" overflow-hidden text-white bg-transparent hover:scale-105 transition duration-300" >
            {/* <div className="relative" > */}
                <Image
                    className="object-cover w-auto"
                    src={ImagePath}
                    alt={AltText}
                    width={ImageWidth}
                    height={ImageHeight}
                />
            {/* </div> */}
            <div className="my-2">
                
                <p className=" font-bold text-wrap text-[#333333] ">{DishName}</p>
                <p className="text-[#FF9F0D] text-sm mt-1">${CurrentPrice} 
                {OldPrice && (<span className="line-through text-[#828282] ml-2">${OldPrice}</span>)}
                </p>
            </div>
        </div>
    )
}