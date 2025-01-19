"use client";
import Banner from "@/components/Banner";
import LatestProductsCard from "@/components/LatestProductsCard";
import SearchBar from "@/components/SearchBar";
import ShopCard from "@/components/ShopCard";
import ShopNowCard from "@/components/ShopNowCard";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchShopData } from "@/lib/utils";
  
interface MenuType {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    imageUrl: string;
}

export default function ShopPage() {
    // const products = [
    //     {
    //         id: 1,
    //         ImagePath: "/assets/images/shop/shop_card/unsplash_ZuIDLSz3XLg.svg",
    //         AltText: "Food Plate and Fork",
    //         DishName: "Fresh Lime",
    //         CurrentPrice: 38.00,
    //         OldPrice: 45.00,
    //     },
    //     {
    //         id: 2,
    //         ImagePath: "/assets/images/shop/shop_card/unsplash_LgTyii0GDKQ.svg",
    //         AltText: "Muffin",
    //         DishName: "Chocolate Muffin",
    //         CurrentPrice: 38.00,
    //     },
    //     {
    //         id: 3,
    //         ImagePath: "/assets/images/shop/shop_card/Mask_Group.svg",
    //         AltText: "Burger",
    //         DishName: "Burger",
    //         CurrentPrice: 21.00,
    //         OldPrice: 45.00,
    //     },
    //     {
    //         id: 4,
    //         ImagePath: "/assets/images/shop/shop_card/unsplash_9G_oJBKwi1c.svg",
    //         AltText: "Country Burger",
    //         DishName: "Country Burger",
    //         CurrentPrice: 45.00,
    //     },
    //     {
    //         id: 5,
    //         ImagePath: "/assets/images/shop/shop_card/unsplash_akwA-GPF710.svg",
    //         AltText: "Drink",
    //         DishName: "Drink",
    //         CurrentPrice: 23.00,
    //         OldPrice: 45.00,
    //     },
    //     {
    //         id: 6,
    //         ImagePath: "/assets/images/shop/shop_card/unsplash_Oxb84ENcFfU.svg",
    //         AltText: "Pizza",
    //         DishName: "Pizza",
    //         CurrentPrice: 43.00,
    //     },
    //     {
    //         id: 7,
    //         ImagePath: "/assets/images/shop/shop_card/unsplash_TBFUDMkNqWg.svg",
    //         AltText: "Cheese Butter",
    //         DishName: "Cheese Butter",
    //         CurrentPrice: 10.00,
    //     },
    //     {
    //         id: 8,
    //         ImagePath: "/assets/images/shop/shop_card/unsplash_U0BzBTt-5so.svg",
    //         AltText: "Sandwiches",
    //         DishName: "Sandwiches",
    //         CurrentPrice: 25.00,
    //     },
    //     {
    //         id: 9,
    //         ImagePath: "/assets/images/shop/shop_card/unsplash_CwMdIMCB0LU.svg",
    //         AltText: "Chicken Chup",
    //         DishName: "Chicken Chup",
    //         CurrentPrice: 12.00,
    //     },
    //     {
    //         id: 10,
    //         ImagePath: "/assets/images/shop/shop_card/unsplash_9G_oJBKwi1c.svg",
    //         AltText: "Country Burger",
    //         DishName: "Country Burger",
    //         CurrentPrice: 45.00,
    //     },
    //     {
    //         id: 11,
    //         ImagePath: "/assets/images/shop/shop_card/unsplash_akwA-GPF710.svg",
    //         AltText: "Drink",
    //         DishName: "Drink",
    //         CurrentPrice: 23.00,
    //         OldPrice: 45.00,
    //     },
    //     {
    //         id: 12,
    //         ImagePath: "/assets/images/shop/shop_card/unsplash_Oxb84ENcFfU.svg",
    //         AltText: "Pizza",
    //         DishName: "Pizza",
    //         CurrentPrice: 43.00,
    //     },
    //     {
    //         id: 13,
    //         ImagePath: "/assets/images/shop/shop_card/unsplash_TBFUDMkNqWg.svg",
    //         AltText: "Cheese Butter",
    //         DishName: "Cheese Butter",
    //         CurrentPrice: 10.00,
    //     },
    //     {
    //         id: 14,
    //         ImagePath: "/assets/images/shop/shop_card/unsplash_U0BzBTt-5so.svg",
    //         AltText: "Sandwiches",
    //         DishName: "Sandwiches",
    //         CurrentPrice: 25.00,
    //     },
    //     {
    //         id: 15,
    //         ImagePath: "/assets/images/shop/shop_card/unsplash_CwMdIMCB0LU.svg",
    //         AltText: "Chicken Chup",
    //         DishName: "Chicken Chup",
    //         CurrentPrice: 12.00,
    //     },  
    // ]
    const [menu, setMenu] = useState<MenuType[] | null>(null);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchShopData();
                setMenu(data);
            } catch (err) {
                setError("Failed to load data");
                throw err;
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return(
        <>
        <Banner Title="Our Shop" Page="Shop" />
        <div className="bg-white">
            <div className="container max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-4 py-16">
                {/* Food Cards */}
                <div className="col-span-9 row-span-7 flex flex-wrap md:justify-normal justify-center mt-4 md:mt-0 gap-4">
                    {menu ? (
                        menu.map((food, idx) => (
                        <Link key={idx} href={`/shop/${food.name}`} >
                            <ShopCard
                                ImagePath={food.imageUrl}
                                AltText={food.name}
                                ImageHeight={100}
                                ImageWidth={244}
                                DishName={food.name}
                                CurrentPrice={food.price}
                                OldPrice={food.originalPrice}
                                /> 
                            </Link>  
                    ))) : (
                        <p>Loading...</p>
                    )}
                </div>

                {/* Pagination */}
                <div className="col-start-1 md:col-span-3 md:col-start-4">
                    <Pagination className="text-[#FF9F0D] my-8">
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#" isActive className="bg-[#FF9F0D] text-white">2</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>

                </div>

                {/* Search Bar */}
                <div className="col-start-1 row-start-1 md:col-start-10 md:col-span-3 flex justify-center">
                    <div className=" md:w-[80%]">
                        <SearchBar PlaceholderText="Search Product"  />
                    </div>
                </div>

                {/* Category Section */}
                <div className="hidden md:col-start-10 row-start-2 md:col-span-2 md:flex justify-center">
                    <div>
                        <h3 className="font-bold text-xl lg:text-lg">Category</h3>
                        {/* Checkboxes */}
                        <div className="flex items-center space-x-2 my-4">
                            <Checkbox
                                id="sandwiches"
                            />
                            <Label 
                                htmlFor="sandwiches"
                                >
                                Sandwiches
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2 my-4">
                            <Checkbox
                                id="burger"
                            />
                            <Label 
                                htmlFor="burger"
                                >
                                Burger
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2 my-4">
                            <Checkbox
                                id="chickenchup"
                            />
                            <Label 
                                htmlFor="chickenchup"
                                >
                                Chicken Chup
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2 my-4">
                            <Checkbox
                                id="drink"
                            />
                            <Label 
                                htmlFor="drink"
                                >
                                Drink
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2 my-4">
                            <Checkbox
                                id="pizza"
                            />
                            <Label 
                                htmlFor="pizza"
                                >
                                Pizza
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2 my-4">
                            <Checkbox
                                id="thi"
                            />
                            <Label 
                                htmlFor="thi"
                                >
                                Thi
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2 my-4">
                            <Checkbox
                                id="nonveg"
                            />
                            <Label 
                                htmlFor="nonveg"
                                >
                                Non Veg
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2 my-4">
                            <Checkbox
                                id="uncategorized"
                            />
                            <Label 
                                htmlFor="uncategorized"
                                >
                                Uncategorized
                            </Label>
                        </div>
                    </div>
                </div>

                {/* Shop Now Card */}
                <div className="col-start-1 row-start-2 md:col-span-3 md:col-start-10 md:row-start-3 h-[260px] flex justify-center">
                    <ShopNowCard />
                </div>

                {/* Filter by Price */}
                <div className="col-start-1 row-start-3 md:col-span-3 md:col-start-10 md:row-start-4 flex justify-center my-1">
                    <div className="md:w-[85%]">
                        <h2 className="font-bold text-xl lg:text-lg">Filter By Price</h2>
                        <div className="my-4">
                            <Slider
                                defaultValue={[50]}
                                min={0}
                                max={8000}
                                step={100}
                                className="bg-[#FF9F0D] "
                            />
                        </div>
                        <div className="flex justify-between text-xs">
                            <span>From $0 to $8000</span>
                            <span>Filter</span>
                        </div>
                    </div>
                    
                </div>

                {/* Latest Products */}
                <div className="hidden md:col-span-3 md:col-start-10 row-start-5 w-[85%] md:flex justify-center my-1">
                    <div>
                        <div className="mb-4">
                            <h2 className="font-bold text-xl lg:text-lg">Latest Products</h2>
                        </div>
                        <div className="space-y-4">
                            <LatestProductsCard  ImagePath="/assets/images/shop/latest_products_card/Vector.svg" ImageWidth={60} ImageHeight={60} ImageText="Food" DishName="Pizza" Price={35} />
                            <LatestProductsCard  ImagePath="/assets/images/shop/latest_products_card/Vector.svg" ImageWidth={60} ImageHeight={60} ImageText="Food" DishName="Cupchake" Price={35} />
                            <LatestProductsCard  ImagePath="/assets/images/shop/latest_products_card/Vector.svg" ImageWidth={60} ImageHeight={60} ImageText="Food" DishName="Cookies" Price={35} />
                            <LatestProductsCard  ImagePath="/assets/images/shop/latest_products_card/Vector.svg" ImageWidth={60} ImageHeight={60} ImageText="Food" DishName="Burger" Price={35} />
                        </div>
                    </div>   
                </div>

                {/* Product Tags */}
                <div className="hidden col-span-3 col-start-10 row-start-6 md:flex justify-center">
                    <div>
                        <div className="mb-4">
                            <h2 className="font-bold text-xl lg:text-lg">Product Tags</h2>
                        </div>
                        <div className="w-52 flex flex-wrap gap-4 text-sm">
                            <p>Services</p>
                            <p>Our Menu</p>
                            <p>Pizza</p>
                            <p>Cupcake</p>
                            <p>Burger</p>
                            <p>Cookies</p>
                            <p>Our Shop</p>
                            <p>Tandoori Chicken</p>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
        </>
    )
}