import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FiSearch } from "react-icons/fi";


interface SearchCardType {
    PlaceholderText: string;
    InputBgColor?: string;
}

export default function SearchBar({PlaceholderText, InputBgColor = "transparent"}: SearchCardType){
    return(
        <div className="flex mt-8">
            <Input 
            className="py-4 pl-4 border-slate-500 rounded-none border-r-0"
                type="text"
                placeholder={PlaceholderText}
                style={{backgroundColor: InputBgColor}}
            />
            <Button type="button" className="bg-[#FF9F0D] rounded-none px-3 py-[16.7px]">
                <FiSearch />
            </Button>
        </div>
    )
}