import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";
import { LuMessageSquareMore } from "react-icons/lu";
import { GoShareAndroid } from "react-icons/go";


interface BlogPostCardType {
    ImagePath: string;
    AltText: string;
    ImageWidth: number;
    ImageHeight: number;
    BlogDate: string;
    BlogTitle: string;
    ComponentWidth?: string
}

export default function BlogPostCard({ComponentWidth = '423px', ImagePath, ImageHeight, ImageWidth, AltText, BlogDate, BlogTitle}: BlogPostCardType) {
    return(
        <div className="overflow-hidden text-white bg-black border-2 border-t-0 border-white" style={{width: ComponentWidth}}>
            <div className="relative w-full h-auto hover:scale-105 transition-transform duration-300">
                <Image
                    className="object-cover w-full h-auto"
                    src={ImagePath}
                    alt={AltText}
                    width={ImageWidth}
                    height={ImageHeight}
                    
                />
            </div>
            <div className="my-6 px-10">
                <p className="text-[#FF9F0D] text-sm my-4">{BlogDate}</p>
                <p className=" font-bold text-wrap mb-6">{BlogTitle}</p>
                <div className="flex justify-between text-sm">
                    <p>Learn More</p>
                    <div className="flex gap-2">
                        <FiThumbsUp aria-label="Like" className="cursor-pointer hover:text-[#FF9F0D] transition-colors" />
                        <LuMessageSquareMore aria-label="Comment" className="text-[#FF9F0D] cursor-pointer hover:scale-110 transition-transform" />
                        <GoShareAndroid aria-label="Share" className="cursor-pointer hover:text-[#FF9F0D] transition-colors"/>
                    </div>
                </div>
            </div>
        </div>
    )
}