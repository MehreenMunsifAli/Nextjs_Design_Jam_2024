import Image from "next/image";

interface ChefCardType {
    ImagePath: string;
    AltText: string;
    ImageWidth?: string;
    ImageHeight?: string;
    ChefName: string;
    ChefTitle: string;
}

export default function ChefCard({ ImagePath, AltText, ImageWidth = '312px', ImageHeight = '391px', ChefName, ChefTitle }: ChefCardType) {

    return(
        <div style={{width: ImageWidth, height: ImageHeight}} className="relative text-[#333333] hover:scale-105 transition duration-300">
            
            <Image
                src={ImagePath}
                alt={AltText}
                fill
                className="object-fill rounded-md"
            />
            <div className="w-[60%] pl-5 py-2 bg-white flex flex-col justify-center absolute left-0 bottom-0 lg:bottom-[46px] rounded-bl-md">
                <p className="font-bold text-[18px]">{ChefName}</p>
                <p className=" text-[14px] ">{ChefTitle}</p>
            </div>
            
        </div>
    )
}