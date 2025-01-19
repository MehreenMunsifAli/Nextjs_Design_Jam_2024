import Image from "next/image";

interface MenuItemType {
    ImageSrc: string;
    AltText: string;
    MenuItem: string;
    MenuDescription: string;
    MenuPrice: number;
    ComponentWidth?: number;
    ImageWidth?: number;
    ImageHeight?: number;
}

export default function MenuItem({ImageSrc, AltText, MenuItem, MenuDescription, MenuPrice, ComponentWidth = 376, ImageWidth = 80, ImageHeight = 80 }: MenuItemType) {

    return(
        <div style={{width: ComponentWidth}} className="text-white flex items-center gap-2 p-0">
            <div className="relative " style={{width: ImageWidth, height: ImageHeight}}>
                <Image 
                    src={ImageSrc}
                    alt={AltText}
                    fill
                    className="object-cover rounded-md"
                />
            </div>
            <div className="flex flex-col justify-center">
                <p className=" font-bold">{MenuItem}</p>
                <p className="text-[12px]">{MenuDescription}</p>
                <p className=" font-bold text-[#FF9F0D]">{MenuPrice}$</p>
            </div>
            
      </div> 
    )
}