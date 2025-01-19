import Banner from "@/components/Banner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { LuUserRound } from "react-icons/lu";
import { RxEnvelopeClosed } from "react-icons/rx";
import { LuLockKeyhole } from "react-icons/lu";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
  

export default function SignupPage() {
    

    return(
        <>
        <Banner Title="Sign Up Page" Page="Sign up" />
        <div className="bg-white">
            <div className="container max-w-screen-lg mx-auto flex flex-col items-center justify-center py-20">
               <Card className="md:w-1/3 py-4 my-auto">
                    <CardHeader>
                        <CardTitle>Sign Up</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form className="text-[#4F4F4F]">
                            <div className="relative flex items-center mb-4">
                                <LuUserRound className="absolute left-3" />
                                <Input type="text" placeholder='Name' className="pl-9" />
                            </div>
                            <div className="relative flex items-center mb-4">
                                <RxEnvelopeClosed className="absolute left-3" />
                                <Input type="email" placeholder='Email' className="pl-9" />
                            </div>
                            <div className="relative flex items-center mb-4">
                                <LuLockKeyhole className="absolute left-3" />
                                <Input type="password" placeholder='Password' className="pl-9" />
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="remember" className="data-[state=checked]:bg-[#FF9F0D] data-[state=checked]:border-[#FF9F0D] rounded-none"/>
                                <Label htmlFor="remember" className="text-sm ">Remember me?</Label>
                            </div>
                            <div className="mt-8">
                                <Link href={'/'}>
                                    <Button className="bg-[#FF9F0D] text-white hover:bg-[#fdae38] w-full py-4 rounded-none">Sign Up</Button>
                                </Link>
                            </div>
                        </form>
                        <div className="flex justify-end items-center mt-4 text-[#828282]">
                            <button className="text-sm">
                                Forgot password?
                            </button>
                        </div>
                        {/* OR section */}
                        <div className="mt-8 text-[#4F4F4F] flex items-center">
                            <div className="border-b-[0.5px] border-[#E0E0E0] w-full"></div>
                            <p className="inline border-[1px] border-[#E0E0E0] p-1 text-sm">OR</p>
                            <div className="border-b-[0.5px] border-[#E0E0E0] w-full"></div>
                        </div>
                        {/* Sign up with google */}
                        <div className="mt-4 relative">
                            <Link href={'/'}>
                                <FcGoogle className="absolute top-[28%] left-3" />
                                <Button className="bg-transparent text-[#4F4F4F] hover:bg-[#fdae38] w-full py-4 rounded-none border-[1px] border-[#E0E0E0]">Sign Up with Google</Button>
                            </Link>
                        </div>
                        {/* Sign up with apple */}
                        <div className="mt-4 relative">
                            <Link href={'/'}>
                                <FaApple className="absolute top-[28%] left-3" />
                                <Button className="bg-transparent text-[#4F4F4F] hover:bg-[#fdae38] w-full py-4 rounded-none border-[1px] border-[#E0E0E0]">Sign Up with Apple</Button>
                            </Link>
                        </div>
                    </CardContent>
               </Card>
            </div>
        </div>
        </>
    )
}