import Image from "next/image";

interface RectangleType {
    ImageSrc: string;
    AltText: string;
    Label?: string;
    ComponentWidth?: string;
    ComponentHeight?: string;
    IconWidth?: number;
    IconHeight?: number;
}

export default function Rectangle({ImageSrc, AltText, Label, ComponentWidth = '102px', ComponentHeight = `100px`, IconWidth = 56, IconHeight = 56 }: RectangleType) {

    return(
        <div style={{width: ComponentWidth}} className="">
            <div className="bg-[#FF9F0D] relative rounded-[6px] flex items-center justify-center" style={{height: ComponentHeight}} >
                <Image 
                    src={ImageSrc}
                    alt={AltText}
                    width={IconWidth}
                    height={IconHeight}
                    className="object-cover"
                />
            </div>
            {Label && (
                <p className="text-[18px] text-center mt-[9px]">{Label}</p>
            )}
      </div> 
    )
}