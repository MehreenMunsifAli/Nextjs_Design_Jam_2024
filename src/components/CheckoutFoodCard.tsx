import Image from "next/image";

interface CheckoutCardType {
    ImagePath: string;
    ImageText: string;
    ImageWidth: number;
    ImageHeight: number;
    DishName: string;
    Quantity?: string;
    Price?: number;
}

export default function CheckoutFoodCard({ImagePath, ImageText, ImageWidth, ImageHeight, DishName, Quantity, Price}: CheckoutCardType) {
    return(
        <div className="flex gap-3" >
                <Image 
                    src={ImagePath}
                    alt={ImageText}
                    width={ImageWidth}
                    height={ImageHeight}
                    className="object-cover"
                />
            {/* </div> */}
            <div>
                <p className="text-sm">{DishName}</p>
                {Quantity && <p className="text-sm">{Quantity}</p>}
                {Price && <p className="text-sm">${Price}</p>}
            </div>
        </div>
    )
}