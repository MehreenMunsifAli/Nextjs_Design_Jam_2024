import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";
import { LuMessageSquareMore } from "react-icons/lu";
import { GoShareAndroid } from "react-icons/go";


interface BlogPostCardType {
    ImagePath: string;
    AltText: string;
    ImageWidth: string;
    ImageHeight: string;
    BlogDate: string;
    BlogTitle: string;
    ComponentWidth?: string
}

export default function BlogPostCard({ComponentWidth = '423px', ImagePath, ImageHeight, ImageWidth, AltText, BlogDate, BlogTitle}: BlogPostCardType) {
    return(
        <div className=" overflow-hidden text-white bg-black border-2 border-t-0 border-white" style={{width: ComponentWidth}}>
            <div className="relative  hover:scale-105 transition duration-300" style={{width: ImageWidth, height: ImageHeight}}>
                <Image
                    className="object-cover"
                    src={ImagePath}
                    alt={AltText}
                    fill
                />
            </div>
            <div className="my-6 px-10">
                <p className="text-[#FF9F0D] text-sm my-4">{BlogDate}</p>
                <p className=" font-bold text-wrap mb-6">{BlogTitle}</p>
                <div className="flex justify-between text-sm">
                    <p>Learn More</p>
                    <div className="flex gap-2">
                        <FiThumbsUp />
                        <LuMessageSquareMore className="text-[#FF9F0D]" />
                        <GoShareAndroid />
                    </div>
                </div>
            </div>
        </div>
    )
}