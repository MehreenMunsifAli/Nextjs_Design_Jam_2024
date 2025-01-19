import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";

interface BlogListPageCardType {
    ImagePath: string;
    AltText: string;
    ImageWidth?: number;
    ImageHeight?: number;
    BlogTitle: string;
    BlogDescription?: string;
}

export default function BlogListPageCard({ ImagePath, AltText, ImageWidth = 312, ImageHeight = 391, BlogTitle, BlogDescription }: BlogListPageCardType) {

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
            <div className=" bg-white mt-2">
                <p className="font-bold text-[18px] ">{BlogTitle}</p>
                <p className="text-[14px] mt-[52px]">{BlogDescription}</p>
                <Link href={"/"}>
                    <div className="inline-flex px-6 py-2 items-center justify-center border-[1px] border-[#FF9F0D] rounded-md">
                        <p className="bg-transparent text-[#FF9F0D]">Read More</p>
                        <FaLocationArrow className="ml-2 text-[#FF9F0D]"/>
                    </div>
                </Link>
            </div>
            
        </div>
    )
}