import { Input } from "./ui/input";
import { FiSearch } from "react-icons/fi";
import { SlHandbag } from "react-icons/sl";
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import { Menu } from "lucide-react";

export default function Header() {
    return (
        <header className="container mx-auto max-w-screen-lg mt-[45px] bg-black lg:flex flex-col justify-center ">
            <div className="text-center h-[32px] ">
                <p className="text-[#FF9F0D] text-[24px] font-bold ">Foodie<span className="text-white">Inn</span></p>
            </div>
            <div className="flex lg:flex-row lg:justify-between lg:items-center flex-col items-end text-white">
                <nav className="flex items-center">
                    {/* Large screen nav */}
                    <ul className="hidden lg:flex justify-between items-center text-[16px] gap-x-6">
                        <li>
                            <Link href={"/"}>Home</Link>
                        </li>
                        <li><Link href={"/menu"}>Menu</Link></li>
                        <li className="relative group">
                            <button className="bg-black text-white py-2 rounded focus:outline-none">
                                About 
                            </button>
                            <ul className="absolute z-10 hidden group-hover:block bg-gray-800 text-white rounded w-40">
                                <li>
                                    <Link
                                        href="/#aboutus"
                                        className="block px-4 py-2 hover:bg-gray-700"
                                    >
                                        Vision
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/#aboutus"
                                        className="block px-4 py-2 hover:bg-gray-700"
                                    >
                                        About Us
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li><Link href={"/shop"}>Shop</Link></li>
                        <li><Link href={"/ourchef"}>Our Chef</Link></li>
                        <li><Link href={"/faq"}>FAQ</Link></li>
                        <li><Link href={"/signin"}>Sign In</Link></li>
                        <li><Link href={"/signup"}>Sign Up</Link></li>
                    </ul>
                    {/* Small Screen nav */}
                    <Sheet>
                        <SheetTrigger className="lg:hidden">
                            <Menu />
                        </SheetTrigger>
                        <SheetContent>
                            <ul className="flex flex-col gap-1 list-none ">
                            <li>
                                <Link href={"/"}>Home</Link>
                            </li>
                            <li><Link href={"/"}>Menu</Link></li>
                            <li className="relative group">
                                <button className=" rounded focus:outline-none">
                                    About
                                </button>
                                <ul className="absolute hidden group-hover:block bg-gray-800 text-white rounded mt-1 w-40">
                                    <li>
                                        <Link
                                            href="/#aboutus"
                                            className="block px-4 py-2 hover:bg-gray-700"
                                        >
                                            Vision
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/#aboutus"
                                            className="block px-4 py-2 hover:bg-gray-700"
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li><Link href={"/"}>Shop</Link></li>
                            <li><Link href={"/faq"}>FAQ</Link></li>
                            <li><Link href={"/signin"}>Sign In</Link></li>
                            <li><Link href={"/signup"}>Sign Up</Link></li>
                        </ul>
                        </SheetContent>
                    </Sheet>
                </nav>
                <div className=" flex items-center sm:justify-end mt-4 lg:mt-0">
                    <div className="relative">
                        <Input placeholder="Search..." className="bg-black text-white text-[16px] w-[310px] h-[40px] pl-[20px] pr-[12px] rounded-[27px] border-2 border-[#FF9F0D]  " />
                        <FiSearch className="absolute right-5 bottom-1/2 transform translate-y-1/2 text-2xl text-white" />
                    </div>
                    <Link href={"/shopping_cart"}>
                        <SlHandbag className="text-2xl ml-4" />
                    </Link>
                </div>
                
            </div>
        </header>
    )
}