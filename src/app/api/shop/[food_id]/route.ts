import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET(req: Request, {params}: {params: {food_id: string}}) {
    try {
        const {food_id} = params;
        if (!food_id){
            return NextResponse.json({error: "Product ID is required"}, {status: 400});
        }

        const query = `*[_type == "food" && id == ${food_id}][0] {
                                    id,
                                    name,
                                    "imageUrl": image.asset->url,
                                    description,
                                    price,
                                    originalPrice,
                                    available,
                                }`;

            const product = await client.fetch(query, {food_id})

        if (!product){
            return NextResponse.json({error: "Product Not Found"}, {status: 404});
        }

        return NextResponse.json(product);
    } catch {
        return NextResponse.json({error: "Failed to Fetch Product"}, {status: 500});
    }
}