"use client";
import Banner from "@/components/Banner";
import SocialIcon from "@/components/SocialIcon";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight, FaRegHeart } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { SlHandbag } from "react-icons/sl";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";
import { LuGitCompareArrows } from "react-icons/lu";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import Link from "next/link";
import ShopCard from "@/components/ShopCard";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { client } from "@/sanity/lib/client";

interface Food {
    name: string;
    imageUrl: string;
    description: string;
    price: number;
    originalPrice?: number;
    available: boolean;
  }

export default function ShopDetails() {
    const [foodData, setFoodData] = useState<Food | null>(null);
    const [activeImage, setActiveImage] = useState<string>("/assets/images/shop/shop_detail/Food_1.svg");
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const itemsPerPage: number = 4;

    const thumbnails = [
        "/assets/images/shop/shop_detail/Food_1.svg",
        "/assets/images/shop/shop_detail/Food_2.svg",
        "/assets/images/shop/shop_detail/Food_3.svg",
        "/assets/images/shop/shop_detail/Food_4.svg",
        "/assets/images/shop/shop_detail/Food_5.svg",
    ];

    const {food_name} = useParams();

    console.log("Food ID: ", food_name);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const query = `*[_type == "food" && name == $food_name][0] {
                                    name,
                                    "imageUrl": image.asset->url,
                                    description,
                                    price,
                                    originalPrice,
                                    available,
                                }`;
                console.log("Fetching data for ", food_name);
                const food: Food | null = await client.fetch(query, { food_name });
                console.log("Fetched Food Data:", food);
                setFoodData(food);
            } catch (error) {
                console.error("Error fetching food data:", error);
            }
        }

        fetchData();
    }, [food_name]);

    if (!food_name) {
        throw new Error('shop details are missing');
    }
    
    const socialIcons = [
        {
            id: 1,
            Url: "https://facebook.com",
            Icon: FaFacebookF,

        },
        {
            id: 2,
            Url: "https://youtube.com",
            Icon: FaYoutube,

        },
        {
            id: 3,
            Url: "https://pinterest.com",
            Icon: FaPinterest,

        },
        {
            id: 4,
            Url: "https://instagram.com",
            Icon: FaInstagram,

        },
        {
            id: 5,
            Url: "https://twitter.com",
            Icon: FaTwitter,

        }
    ]

    const products = [
        {
            id: 1,
            ImagePath: "/assets/images/shop/shop_card/unsplash_ZuIDLSz3XLg.svg",
            AltText: "Food Plate and Fork",
            DishName: "Fresh Lime",
            CurrentPrice: 38.00,
            OldPrice: 45.00,
        },
        {
            id: 2,
            ImagePath: "/assets/images/shop/shop_card/unsplash_LgTyii0GDKQ.svg",
            AltText: "Muffin",
            DishName: "Chocolate Muffin",
            CurrentPrice: 38.00,
        },
        {
            id: 3,
            ImagePath: "/assets/images/shop/shop_card/Mask_Group.svg",
            AltText: "Burger",
            DishName: "Burger",
            CurrentPrice: 21.00,
            OldPrice: 45.00,
        },
        {
            id: 4,
            ImagePath: "/assets/images/shop/shop_card/unsplash_9G_oJBKwi1c.svg",
            AltText: "Country Burger",
            DishName: "Country Burger",
            CurrentPrice: 45.00,
        },
        {
            id: 5,
            ImagePath: "/assets/images/shop/shop_card/unsplash_akwA-GPF710.svg",
            AltText: "Drink",
            DishName: "Drink",
            CurrentPrice: 23.00,
            OldPrice: 45.00,
        },
        {
            id: 6,
            ImagePath: "/assets/images/shop/shop_card/unsplash_Oxb84ENcFfU.svg",
            AltText: "Pizza",
            DishName: "Pizza",
            CurrentPrice: 43.00,
        },
        {
            id: 7,
            ImagePath: "/assets/images/shop/shop_card/unsplash_TBFUDMkNqWg.svg",
            AltText: "Cheese Butter",
            DishName: "Cheese Butter",
            CurrentPrice: 10.00,
        },
        {
            id: 8,
            ImagePath: "/assets/images/shop/shop_card/unsplash_U0BzBTt-5so.svg",
            AltText: "Sandwiches",
            DishName: "Sandwiches",
            CurrentPrice: 25.00,
        },
        {
            id: 9,
            ImagePath: "/assets/images/shop/shop_card/unsplash_CwMdIMCB0LU.svg",
            AltText: "Chicken Chup",
            DishName: "Chicken Chup",
            CurrentPrice: 12.00,
        },
        {
            id: 10,
            ImagePath: "/assets/images/shop/shop_card/unsplash_9G_oJBKwi1c.svg",
            AltText: "Country Burger",
            DishName: "Country Burger",
            CurrentPrice: 45.00,
        },
        {
            id: 11,
            ImagePath: "/assets/images/shop/shop_card/unsplash_akwA-GPF710.svg",
            AltText: "Drink",
            DishName: "Drink",
            CurrentPrice: 23.00,
            OldPrice: 45.00,
        },
        {
            id: 12,
            ImagePath: "/assets/images/shop/shop_card/unsplash_Oxb84ENcFfU.svg",
            AltText: "Pizza",
            DishName: "Pizza",
            CurrentPrice: 43.00,
        },
        {
            id: 13,
            ImagePath: "/assets/images/shop/shop_card/unsplash_TBFUDMkNqWg.svg",
            AltText: "Cheese Butter",
            DishName: "Cheese Butter",
            CurrentPrice: 10.00,
        },
        {
            id: 14,
            ImagePath: "/assets/images/shop/shop_card/unsplash_U0BzBTt-5so.svg",
            AltText: "Sandwiches",
            DishName: "Sandwiches",
            CurrentPrice: 25.00,
        },
        {
            id: 15,
            ImagePath: "/assets/images/shop/shop_card/unsplash_CwMdIMCB0LU.svg",
            AltText: "Chicken Chup",
            DishName: "Chicken Chup",
            CurrentPrice: 12.00,
        },  
    ]

    const handleNext = () => {
        if (currentIndex + itemsPerPage < products.length){
            setCurrentIndex((prev) => prev + 1);
        }
    }

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    }


    return (
        <>
            <Banner Title="Shop Details" Page="Shop details" />
            <div className=" bg-white">
                <div className="container max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-4 py-16 text-[#333333]">

                    {/* Images Section for Mobile */}
                    <div className="md:hidden flex justify-center">
                        <Carousel className="w-full max-w-xs">
                            <CarouselContent>
                                {thumbnails.map((thumb, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-1">
                                    <Card>
                                        <CardContent className=" aspect-square p-0 overflow-hidden">
                                            <Image 
                                                src={thumb}
                                                alt={`Food ${index + 1}`}
                                                width={100}
                                                height={100}
                                                className="object-cover rounded-md w-full h-full"
                                            />
                                        {/* <span className="text-4xl font-semibold">{thumb}</span> */}
                                        </CardContent>
                                    </Card>
                                    </div>
                                </CarouselItem>
                                ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                    </div>
                    {/* Images Section */}
                    <div className="hidden md:block col-start-1 col-span-1 row-span-7 row-start-1 space-y-3">
                        {thumbnails.map((thumb, idx) => (
                            <div
                                key={idx}
                                onClick={() => setActiveImage(thumb)}
                                className={`h-16 w-16 md:h-24 md:w-24 rounded-[8px] cursor-pointer  hover:scale-105 transition duration-300
                                    ${activeImage === thumb ? "border-2 border-black" : ""}`}

                            >
                                <Image
                                    src={thumb}
                                    alt={`Thumbnail ${idx + 1}`}
                                    width={120}
                                    height={120}
                                    className="object-contain w-full h-full  "
                                />
                            </div>
                        ))}

                    </div>

                    {/* Active Image */}
                    <div className="hidden md:block col-start-2 col-span-5 row-span-7 ml-6">
                        <Image
                            src={activeImage}
                            alt="Food Image"
                            width={100}
                            height={100}
                            className="object-cover rounded-md w-full h-full"
                        />
                    </div>

                    {/* Product Namex Description, and Price Section */}
                    {/* In stock row */}
                    <div className="md:col-start-7 md:col-span-6 row-start-1 px-4 gap-4 flex items-start justify-between">
                        <span className="px-4 py-1 rounded-lg text-sm bg-[#FF9F0D] text-white">In stock</span>
                        <div className="flex gap-2 text-[#828282]">
                            <span className="flex items-center gap-1"><FaRegArrowAltCircleLeft /> Prev </span>
                            <span className="flex items-center gap-1">Next <FaRegArrowAltCircleRight /></span>
                        </div>
                    </div>

                    {/* Name */}
                    <div className="md:col-start-7 md:col-span-6 md:row-start-2 px-4 gap-4">
                        <h1 className="text-3xl lg:text-h3 font-bold">{foodData?.name}</h1>
                    </div>

                    {/* Description */}
                    <div className="md:col-start-7 md:col-span-6 md:row-start-3 px-4 gap-4 ">
                        <p className="text-[#4F4F4F] py-4 border-b-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quia adipisci quae voluptates, deleniti hic fugit quibusdam itaque? Dolorum laudantium adipisci sapiente blanditiis, quis suscipit ex eligendi aperiam laborum eveniet?</p>
                    </div>

                    {/* Price */}
                    <div className="md:col-start-7 md:col-span-6 md:row-start-4 px-4 gap-4">
                        <p className="text-2xl font-bold py-2">54.00$</p>
                        <div className="flex items-center gap-1">
                            <div className="flex items-center">
                                <IoIosStar className="text-[#FF9F0D] " />
                                <IoIosStar className="text-[#FF9F0D] " />
                                <IoIosStar className="text-[#FF9F0D] " />
                                <IoIosStar className="text-[#FF9F0D] " />
                                <IoIosStar className="text-[#FF9F0D] " />
                            </div>
                            <span className="text-sm">&nbsp;&nbsp;|&nbsp;&nbsp; 5.0 Rating &nbsp;&nbsp;|&nbsp;&nbsp; 22 Review</span>
                        </div>
                    </div>

                    {/* Dictum/cursus/Risus */}
                    <div className="md:col-start-7 md:col-span-6 md:row-start-5 px-4 gap-4">
                        <p>Dictum/cursus/Risus</p>
                    </div>

                    {/* Add to cart */}
                    <div className="md:col-start-7 md:col-span-6 md:row-start-6 px-4 gap-4 text-lg ">
                        <div className="flex items-center gap-4 border-b-2 pb-6">
                            <div className="flex items-center">
                                <p className="border-black border-[1px] px-4 py-1">-</p>
                                <p className="font-bold px-4 py-1 border-[1px] border-black border-r-0 border-l-0">1</p>
                                <p className="border-black border-[1px] px-4 py-1">+</p>
                            </div>
                            <div className="relative">
                                <SlHandbag className="absolute top-[30%] text-white left-3 text-xs" />
                                <Button type="button" className="bg-[#FF9F0D] rounded-none py-[18px] px-8">Add to Cart</Button>
                            </div>
                        </div>
                    </div>

                    {/* Add to Wishlist */}
                    <div className="md:col-start-7 md:col-span-6 md:row-start-7 px-4 gap-4">
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2"> <FaRegHeart /> Add to Wishlist</div>
                            <div className="flex items-center gap-2"> <LuGitCompareArrows /> Compare </div>
                        </div>
                        <p>Category: Pizza</p>
                        <p>Tag: Our Shop</p>
                    </div>

                    {/* Share: Social Icons */}
                    <div className="md:col-start-7 md:col-span-6 md:row-start-8 px-4 gap-4 ">
                        <div className="flex items-center border-b-2 pb-6 gap-2">
                            <p>Share :&nbsp;</p>
                            {socialIcons.map((icon) => (
                                <SocialIcon
                                    key={icon.id}
                                    Icon={icon.Icon}
                                    Url={icon.Url}
                                    BgColor="#4F4F4F"
                                    Color="white"
                                    Text={14}
                                    Radius={20}
                                />
                            ))}
                        </div>

                    </div>


                    {/* Description Reviews Heading */}
                    <div className="md:col-start-1 md:row-start-9 md:col-span-4 flex items-end">
                        <div className="flex items-center gap-6 text-sm">
                            <p className="text-white bg-[#FF9F0D] px-8 py-3">Description</p>
                            <p>Reviews (24)</p>
                        </div>
                    </div>

                    {/* Description Paragraph */}
                    <div className="md:col-start-1 md:row-start-10 md:col-span-12 text-sm space-y-6 text-[#828282]">
                        <div className="space-y-6 mt-4">
                            <p>
                                Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.
                            </p>
                            <p>
                                Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est dignissim nec. Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula fermentum. Integer eu vulputate justo. Aenean pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h1 className="text-base">Key Benefits</h1>
                            <ul className="list-disc list-inside ml-2 space-y-2">
                                <li>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </li>
                                <li>
                                    Maecenas ullamcorper est et massa mattis condimentum.
                                </li>
                                <li>
                                    Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.
                                </li>
                                <li>
                                    Etiam nec massa et lectus faucibus ornare congue in nunc.
                                </li>
                                <li>
                                    Mauris eget diam magna, in blandit turpis.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Similar Products */}
                    <div className="md:col-start-1 md:col-span-12 mt-20 text-[#333333] flex justify-between">
                        <h1 className="text-xl md:text-2xl font-bold">Similar Products</h1>
                        <div className="flex items-center gap-2 text-xl">
                            <FaArrowCircleLeft className={`bg-[#FAF7F2] text-[#FF9F0D] hover:scale-105 ${currentIndex === 0 && `opacity-50 pointer-events-none` } `} onClick={handlePrev} />
                            <FaArrowCircleRight className={`bg-[#FAF7F2] text-[#FF9F0D] hover:scale-105 ${currentIndex + itemsPerPage >= products.length && `opacity-50 pointer-events-none`} `} onClick={handleNext} />
                        </div>
                    </div>
                    
                    {/* Similar Products Images for Mobile */}
                    <div className="md:hidden mt-4 flex justify-center ">
                        {products.slice(currentIndex, currentIndex + 1).map((product) => (
                            <Link href={"/"} key={product.id} >
                                <ShopCard 
                                ImagePath={product.ImagePath}
                                AltText="Similar Food Item"
                                ImageHeight={220}
                                ImageWidth={244}
                                DishName={product.DishName}
                                CurrentPrice={product.CurrentPrice}
                                OldPrice={product.OldPrice}
                                />
                            </Link>
                        ))}
                    </div>

                    {/* Similar Products Images for Medium and Larger Screens */}
                    <div className="hidden md:col-start-1 md:col-span-12 mt-4 md:flex justify-between gap-4">
                        {products.slice(currentIndex, currentIndex + itemsPerPage).map((product) => (
                            <Link href={"/"} key={product.id} >
                                <ShopCard 
                                ImagePath={product.ImagePath}
                                AltText="Similar Food Item"
                                ImageHeight={220}
                                ImageWidth={244}
                                DishName={product.DishName}
                                CurrentPrice={product.CurrentPrice}
                                OldPrice={product.OldPrice}
                                />
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}
