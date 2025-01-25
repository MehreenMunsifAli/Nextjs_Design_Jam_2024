import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        
        const query = `*[_type == "chef"]{
                            "imageUrl": image.asset->url, 
                            name,
                            position,
                            }`;

        const products = await client.fetch(query)

        if (!products){
            return NextResponse.json({error: "Chefs Not Found"}, {status: 404});
        }

        return NextResponse.json(products, {status: 200});
    } catch (error) {
        console.error("Server Error: ", error)
        return NextResponse.json({error: "Server Error. Please try again"}, {status: 500});
    }
}