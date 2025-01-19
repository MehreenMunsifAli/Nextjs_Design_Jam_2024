import Banner from "@/components/Banner";
import LatestProductsCard from "@/components/LatestProductsCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RxCross2 } from "react-icons/rx";
import { PiCheckSquareOffsetBold } from "react-icons/pi";
import Link from "next/link";



export default function ShoppingCartPage() {

    const products = [
        {
            imagePath: '/assets/images/shopping_cart/unsplash_uBigm8w_MpA.svg',
            dishName: 'Burger',
            price: 25,
        },
        {
            imagePath: '/assets/images/shopping_cart/unsplash_pLKgCsBOiw4.svg',
            dishName: 'Zinger',
            price: 35,
        },
        {
            imagePath: '/assets/images/shopping_cart/unsplash_q54Oxq44MZs.svg',
            dishName: 'Donuts',
            price: 15,
        },
        {
            imagePath: '/assets/images/shopping_cart/unsplash_rAyCBQTH7ws.svg',
            dishName: 'Cheese Butter',
            price: 15,
        },
        {
            imagePath: '/assets/images/shopping_cart/unsplash_teuvnOXOGVo.svg',
            dishName: 'Chocolate Muffin',
            price: 28,
        },
    ]

    return(
        <>
            <Banner Title="Shopping Cart" Page="Shopping cart" />
            <div className="bg-white">
                <div className="container max-w-screen-lg mx-auto py-16 gap-4">
                    <table className="w-full table-auto mb-16">
                        <thead className=""> 
                            <tr className=" font-bold text-left">
                                <th className=" ">Product</th>
                                <th className="">Price</th>
                                <th className="">Quantity</th>
                                <th className="">Total</th>
                                <th className="">Remove</th>
                            </tr>
                        </thead>
                        <tbody className=" mt-16">
                            {products.map((prod, idx) => (
                                <tr key={idx} className=" border-b-2">
                                    <td className="  py-8" ><LatestProductsCard ImagePath={prod.imagePath} ImageText="Food 2" DishName={prod.dishName} ImageWidth={70} ImageHeight={70} /> </td>
                                    <td className=""> ${prod.price} </td>
                                    <td className="">
                                        <div className="flex items-center text-xs">
                                            <p className=" rounded-full rounded-r-none border-[1px] px-2 py-1">-</p>
                                            <p className="font-bold px-2 py-1 border-[1px] border-r-0 border-l-0">1</p>
                                            <p className="rounded-full rounded-l-none border-[1px] px-2 py-1">+</p>
                                        </div>    
                                     </td>
                                    <td className=""> ${prod.price}</td>
                                    <td className="px-4 "><RxCross2/></td>
                                </tr>
                                ))}
                        </tbody>
                    </table>

                    {/* Coupon Code & Total Bill */}
                    <div className="my-14 grid grid-cols-1 md:grid-cols-12 gap-4">
                        {/* Coupon Code */}
                        <div className="md:col-start-1 md:col-span-6">
                            <h1 className="text-h5 font-bold mb-4">Coupon Code</h1>
                            <div className="rounded border-2 border-[#E0E0E0] text-[#828282] p-5">
                                <p className="mb-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non
                                </p>
                                <div className="flex py-2">
                                    <Input
                                        placeholder="Enter Here Code"
                                    />
                                    <Button className="bg-[#FF9F0D] text-white hover:bg-[#fdae38]">Apply</Button>
                                </div>
                            </div>
                        </div>
                        {/* Total Bill */}
                        <div className="md:col-start-7 md:col-span-6">
                            <h1 className="text-h5 font-bold mb-4">Total Bill</h1>
                            <div className="rounded border-2 border-[#BDBDBD] text-[#828282] py-4">
                                <div className="font-bold flex justify-between text-[#333333] px-4 ">
                                    <h2 className="text-[18px]">
                                        Cart Subtotal
                                    </h2>
                                    <p>$120</p>
                                </div>
                                
                                <div className="flex justify-between pt-2 pb-4 px-4">
                                    <p>Shipping Charges</p>
                                    <p>$00.00</p>
                                </div>

                                <div className="font-bold flex justify-between border-t-2 border-[#BDBDBD] text-[#333333] pt-3 px-4">
                                    <h2 className="text-[18px]">
                                        Total
                                    </h2>
                                    <p>$205</p>
                                </div>
                            </div>
                        </div>

                        {/* Proceed to check out */}
                        <div className="md:col-start-7 md:col-span-6">
                            <Link href={'/checkout'}>
                                <Button className="bg-[#FF9F0D] text-white hover:bg-[#fdae38] w-full py-6 rounded-none">Proceed to Checkout <PiCheckSquareOffsetBold /></Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}