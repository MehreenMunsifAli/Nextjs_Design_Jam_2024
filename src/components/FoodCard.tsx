import Image from "next/image";

interface FoodCardType {
    ImagePath: string;
    AltText: string;
    ImageWidth?: number;
    ImageHeight?: number;
    ComponentWidth?: number;
    ComponentHeight?: number;
    Subtitle: string;
    Title: string;
}

export default function FoodCard({ ImagePath, AltText, ImageWidth = 100, ImageHeight = 100, ComponentWidth = 218, Subtitle, Title }: FoodCardType) {

    return(
        <div style={{width: ComponentWidth}} className="overflow-hidden flex flex-col justify-between items-center py-4 text-white">
            <div className="relative" style={{width: ImageWidth, height: ImageHeight}}>
                <Image
                    src={ImagePath}
                    alt={AltText}
                    fill
                    sizes="(max-width: 768px) 40vw, (max-width: 1280px) 50vw"
                    className="object-cover"
                />
            </div>
            <h5 className="font-bold text-[16px] lg:text-h6 py-4">{Subtitle}</h5>
            <h3 className="font-bold text-h5">{Title}</h3>
        </div>
    )
}