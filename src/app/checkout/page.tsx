import Banner from "@/components/Banner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CheckoutFoodCard from "@/components/CheckoutFoodCard";


export default function CheckoutPage() {

    const checkoutCard = [
            {
                ImagePath: '/assets/images/checkout_card/Rectangle_8933.svg',
                ImageText: 'Food 1',
                DishName: 'Chicken Tikka Kebab',
                Quantity: '150 gm net',
                Price: 50,
            },
            {
                ImagePath: '/assets/images/checkout_card/Rectangle_8933.svg',
                ImageText: 'Food 2',
                DishName: 'Hot and Sour Soup',
                Quantity: '500 gm net',
                Price: 80,
            },
            {
                ImagePath: '/assets/images/checkout_card/Rectangle_8933.svg',
                ImageText: 'Food 3',
                DishName: 'Beef Steak',
                Quantity: '300 gm net',
                Price: 87,
            },
        ]

    return(
        <>
            <Banner Title="Checkout Page" Page="Checkout" />
            <div className="bg-white">
                <div className="container max-w-screen-lg mx-auto py-16 grid grid-cols-1 md:flex gap-2">
                    <div className="md:w-2/3 p-4">
                        <h3 className="text-[18px] text-[#333333] font-bold">Shipping Address</h3>
                        <form action="" className="mt-4 flex flex-wrap gap-4">
                            <div className="md:w-[48%] w-full mt-4">
                                <Label htmlFor="first-name" >First Name</Label>
                                <Input name="first-name" className="mt-2" type="text" />
                            </div>
                            <div className="md:w-[48%] w-full mt-4">
                                <Label htmlFor="last-name" >Last Name</Label>
                                <Input name="last-name" className="mt-2" type="text" />
                            </div>
                            <div className="md:w-[48%] w-full mt-4">
                                <Label htmlFor="email" >Email address</Label>
                                <Input name="email" className="mt-2" type="email" />
                            </div>
                            <div className="md:w-[48%] w-full mt-4">
                                <Label htmlFor="phone" >Phone number</Label>
                                <Input name="phone" className="mt-2" type="tel" pattern="^03\d{2}-\d{7}$" />
                            </div>
                            <div className="md:w-[48%] w-full mt-4">
                                <Label htmlFor="company" >Company</Label>
                                <Input name="company" className="mt-2" type="text" />
                            </div>
                            <div className="md:w-[48%] w-full mt-4">
                                <Label htmlFor="country" >Country</Label>
                                <Select>
                                    <SelectTrigger className="w-full mt-2">
                                        <SelectValue placeholder="Choose country" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="pakistan">Pakistan</SelectItem>
                                            <SelectItem value="oman">Oman</SelectItem>
                                            <SelectItem value="uae">United Arab Emirates</SelectItem>
                                            <SelectItem value="qatar">Qatar</SelectItem>
                                            <SelectItem value="kuwait">Kuwait</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="md:w-[48%] w-full mt-4">
                                <Label htmlFor="city" >City</Label>
                                <Select>
                                    <SelectTrigger className="w-full mt-2">
                                        <SelectValue placeholder="Choose city" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="pakistan">Pakistan</SelectItem>
                                            <SelectItem value="oman">Oman</SelectItem>
                                            <SelectItem value="uae">United Arab Emirates</SelectItem>
                                            <SelectItem value="qatar">Qatar</SelectItem>
                                            <SelectItem value="kuwait">Kuwait</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="md:w-[48%] w-full mt-4">
                                <Label htmlFor="zip-code" >Zip code</Label>
                                <Input name="zip-code" className="mt-2" type="number" />
                            </div>
                            <div className="md:w-[48%] w-full mt-4">
                                <Label htmlFor="address1" >Address 1</Label>
                                <Input name="address1" className="mt-2" type="text" />
                            </div>
                            <div className="md:w-[48%] w-full mt-4">
                                <Label htmlFor="address2" >Address 2</Label>
                                <Input name="address2" className="mt-2" type="text" />
                            </div>
                        </form>
                        <h3 className="text-[18px] text-[#333333] font-bold mt-8">Billing Address</h3>
                        <div className="flex items-center space-x-2 mt-2">
                            <Checkbox id="same-as-shipping" />
                            <label
                                htmlFor="same-as-shipping"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Same as shipping address
                            </label>
                        </div>

                        {/* Back to cart & Proceed to shipping buttons */}
                        <div className="mt-6 flex gap-4">
                            <div className="w-[48%]">
                                <Link href={'/shopping_cart'}>
                                    <Button className="bg-[#E0E0E0] text-[#4F4F4F] hover:bg-[#c7c0c0] w-full py-6 rounded-none">Back to cart</Button>
                                </Link>
                            </div>
                            <div className="w-[48%]">
                                <Link href={'/shopping_cart'}>
                                    <Button className="bg-[#FF9F0D] text-white hover:bg-[#fdae38] w-full py-6 rounded-none">Proceed to shipping</Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/3 border-[1px] border-[#E0E0E0] p-4 pb-0 flex flex-col justify-around">
                            {checkoutCard.map((card, idx) => (
                                <div key={idx} className="pb-4 border-b-[1px] border-[#E0E0E0]">
                                    <CheckoutFoodCard 
                                        ImagePath={card.ImagePath}
                                        ImageText={card.ImageText}
                                        ImageWidth={70}
                                        ImageHeight={40}
                                        DishName={card.DishName}
                                        Quantity={card.Quantity}
                                        Price={card.Price}
                                    />
                                </div>
                            ))}
                            <div className="flex justify-between "><p>Sub-total</p><p>130$</p></div>
                            <div className="flex justify-between "><p>Shipping</p><p>Free</p></div>
                            <div className="flex justify-between "><p>Discount</p><p>25%</p></div>
                            <div className="flex justify-between "><p>Tax</p><p>54.76$</p></div>
                            <div className="flex justify-between border-t-[1px] pt-2 border-[#E0E0E0] "><p>Total</p><p className="font-bold">432.65$</p></div>
                            <div className="">
                                <Link href={'/'}>
                                    <Button className="bg-[#FF9F0D] text-white hover:bg-[#fdae38] w-full py-6">Place an order</Button>
                                </Link>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}