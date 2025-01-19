import FoodCard from "./FoodCard";

export default function Highlight() {

    return (
        <div className="container max-w-screen-lg mx-auto my-16 py-16 relative bg-black">
            {/* Background image with opacity */}
            <div
                className="absolute inset-0 bg-cover bg-no-repeat"
                style={{
                    backgroundImage: "url('/assets/images/unsplash_bpPTlXWTOvg.png')",
                    opacity: 0.2,
                }}
            ></div>

            {/* Content */}
            <div className=" relative z-10 mx-auto flex flex-col justify-center lg:flex-row lg:justify-between items-center flex-wrap lg:flex-nowrap">
                <FoodCard
                    ImagePath="/assets/images/Group-1.png"
                    AltText="Food Item"
                    ImageWidth={80}
                    ImageHeight={80}
                    Subtitle="Professional Chefs"
                    Title="420"
                />
                <FoodCard
                    ImagePath="/assets/images/Group-2.png"
                    AltText="Food Item"
                    ImageWidth={80}
                    ImageHeight={80}
                    Subtitle="Delicious Food"
                    Title="320"
                />
                <FoodCard
                    ImagePath="/assets/images/Group-3.png"
                    AltText="Food Item"
                    ImageWidth={80}
                    ImageHeight={80}
                    Subtitle="Delicious Food"
                    Title="320"
                />
                <FoodCard
                    ImagePath="/assets/images/Group-4.png"
                    AltText="Food Item"
                    ImageWidth={80}
                    ImageHeight={80}
                    Subtitle="Delicious Food"
                    Title="320"
                />
            </div>
        </div>
    )
}