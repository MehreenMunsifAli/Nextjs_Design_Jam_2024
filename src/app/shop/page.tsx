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
import { fetchProducts } from "@/lib/utils";

// structure of each menu item
interface MenuType {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    imageUrl: string;
    category: string;
}

export default function ShopPage() {
    const [menu, setMenu] = useState<MenuType[] | null>(null);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
    const [querySearch, setQuerySearch] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage: number = 12;

    useEffect(() => {
        fetchProducts('/api/shop').then((res) => {
            if (res.error) {
                setError(res.error);
                return;
            }

            if (res.data) {
                setMenu(res.data);
            }

            setError('');
            setLoading(false)
        })
    }, []);

    const handleCategoryChange = (category: string) => {
        setSelectedCategory((prev) => 
            prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
        );
    }

    const filteredMenu = menu
        ? menu.filter((food) => 
            (selectedCategory.length === 0 || selectedCategory.includes(food.category)) &&
            (querySearch === "" || food.name.toLowerCase().includes(querySearch.toLowerCase()))
        )
        : [];

    // e.g., menu length 16 / itemsPerPage 12 = 1.3  Math.ceil will round up to 2
    const totalPages = Math.ceil(filteredMenu.length / itemsPerPage);
    
    const paginatedMenu = filteredMenu.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    if (loading) return <div>Loading...</div>;
    // if (error) return <div>{error}</div>;

    return(
        <>
        <Banner Title="Our Shop" Page="Shop" />
        <div className="bg-white">
            <div className="container max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-12 md:row-span-6 gap-y-4 md:gap-4 py-16">
                {/* Food Cards */}
                <div className="col-span-9 row-auto flex flex-wrap md:justify-normal justify-center mt-4 md:mt-0 gap-4">
                {error && (
                        <p className="mx-auto mt-8">{error}</p>
                )}
                    {paginatedMenu && (
                        paginatedMenu.map((food, idx) => (
                        <Link key={idx} href={`/shop/${food.id}`} >
                            <ShopCard
                                ImagePath={food.imageUrl}
                                AltText={food.name}
                                ImageHeight={220}
                                ImageWidth={244}
                                DishName={food.name}
                                CurrentPrice={food.price}
                                OldPrice={food.originalPrice}
                                /> 
                            </Link>  
                    )))    
                    }
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                <div className="col-start-1 md:col-span-3 md:col-start-4">
                    <Pagination className="text-[#FF9F0D] my-8 cursor-pointer">
                        <PaginationContent>
                            <PaginationItem>
                                {currentPage > 1 && <PaginationPrevious onClick={handlePreviousPage} />}
                                {/* <PaginationPrevious onClick={currentPage > 1 ? handlePreviousPage : undefined} className={currentPage === 1 ? "opacity-50 pointer-events-none" : ""} /> */}
                            </PaginationItem>

                            {Array.from({length: totalPages}, (_, i) => (
                            <PaginationItem key={i}>
                                <PaginationLink onClick={() => setCurrentPage(i + 1)} isActive={i+1 === currentPage} className={i+1 === currentPage ? "bg-[#FF9F0D] text-white" : ''} >{ i + 1 }</PaginationLink>
                            </PaginationItem>
                            ))}

                            <PaginationItem>
                                {currentPage < totalPages && <PaginationNext onClick={handleNextPage} />}
                                {/* <PaginationNext onClick={currentPage < totalPages ? handleNextPage : undefined} className={currentPage === totalPages ? "opacity-50 pointer-events-none" : ""}  /> */}
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>

                </div>
                )}

                {/* Search Bar */}
                <div className="col-start-1 row-start-1 md:col-start-10 md:col-span-3 space-y-4">
                <div className="col-start-1 row-start-1 md:col-start-10 md:col-span-3 flex justify-center">
                    <div className=" md:w-[80%]">
                        <SearchBar PlaceholderText="Search Product" value={querySearch} onChange={(e) => setQuerySearch(e.target.value)} />
                    </div>
                </div>

                {/* Category Section */}
                <div className="hidden md:flex justify-start ml-6">
                    <div>
                        <h3 className="font-bold text-xl lg:text-lg">Category</h3>
                        {/* Checkboxes */}
                        { menu && (
                            Array.from(new Set(menu.map((food) => food.category))).map((category, idx) => (
                            <div key={idx} className="flex items-center space-x-2 my-4">
                                <Checkbox
                                    id={category}
                                    onCheckedChange={() => handleCategoryChange(category)}
                                />
                                <Label 
                                    htmlFor={category}
                                    >
                                    {category}
                                </Label>
                            </div>
                        ))) 
                        }
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
                <div className="hidden md:flex justify-start ml-6">
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
        </div>
        </>
    )
}