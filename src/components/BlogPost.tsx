import BlogPostCard from "./BlogPostCard";
import {Great_Vibes} from "next/font/google";

const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ["400","400"] });

export default function BlogPost() {

    return(
        <>
        <div className="container max-w-screen-lg mx-auto my-20 text-white ">
            {/* Top Content */}
            <div className="text-center">
                <h1 className={`${greatVibes.className} text-[#FF9F0D] italic text-h5 lg:text-h4`}>Blog Post</h1>
                <h2 className="text-h4 lg:text-h3 font-bold leading-tight mt-2 whitespace-nowrap">
                        <span className="text-[#FF9F0D]">La</span>test News & Blog
                </h2>
            </div>

            {/* Cards Content */}
            <div className=" flex justify-center lg:justify-between items-center flex-wrap lg:flex-nowrap my-16 gap-6 overflow-hidden">
                <BlogPostCard ImagePath="/assets/images/blogpost/Image_Placeholder1.svg" AltText="Burger Image" ComponentWidth="323px" ImageWidth="323px" ImageHeight="300px" BlogDate="10 February 2022" BlogTitle="Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis" />
                <BlogPostCard ImagePath="/assets/images/blogpost/Image_Placeholder2.svg" AltText="Pizza Image" ComponentWidth="323px" ImageWidth="323px" ImageHeight="300px" BlogDate="10 February 2022" BlogTitle="Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A" />
                <BlogPostCard ImagePath="/assets/images/blogpost/Image_Placeholder3.svg" AltText="Shashlik Image" ComponentWidth="323px" ImageWidth="323px" ImageHeight="300px" BlogDate="10 February 2022" BlogTitle="Curabitur rutrum velit ac congue malesuada" />
            </div>
            
        </div>
        </>
    );
}