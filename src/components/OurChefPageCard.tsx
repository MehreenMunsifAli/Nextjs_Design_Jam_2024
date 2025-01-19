import Image from "next/image";

interface OurChefPageCardType {
    ImagePath: string;
    AltText: string;
    ImageWidth?: number;
    ImageHeight?: number;
    ChefName: string;
    ChefTitle?: string;
}

export default function OurChefPageCard({ ImagePath, AltText, ImageWidth = 312, ImageHeight = 391, ChefName, ChefTitle = 'Chef' }: OurChefPageCardType) {

    return(
        <div className="text-[#333333]">
            <div className="relative" >
                <Image
                    src={ImagePath}
                    alt={AltText}
                    width={ImageWidth}
                    height={ImageHeight}
                    className="object-fill w-full h-full"
                />
            </div>
            <div className=" bg-white mt-2 flex flex-col justify-between items-center">
                <p className="font-bold text-[18px] ">{ChefName}</p>
                <p className=" text-[14px] ">{ChefTitle}</p>
            </div>
            
        </div>
    )
}