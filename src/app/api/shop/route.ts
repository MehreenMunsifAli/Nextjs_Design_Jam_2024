import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        
        const query = `*[_type == "food"] {
                                    id,
                                    name,
                                    "imageUrl": image.asset->url,
                                    description,
                                    price,
                                    originalPrice,
                                    category,
                                }`;

        const products = await client.fetch(query)

        if (!products){
            return NextResponse.json({error: "Products Not Found"}, {status: 404});
        }

        return NextResponse.json(products);
    } catch {
        return NextResponse.json({error: "Failed to Fetch Products"}, {status: 500});
    }
}