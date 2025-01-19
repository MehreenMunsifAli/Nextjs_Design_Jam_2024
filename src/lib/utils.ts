import { client } from "@/sanity/lib/client";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function fetchShopData() {
  try {
      const query = `*[_type == "food"]{id, "imageUrl":image.asset->url, name, price, originalPrice}`;
      const food = await client.fetch(query);
      console.log("Food Data Fetched Successfully");
      if (!food.length) throw new Error('No Food Items Found!');
      return food;
  } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
  }
}

export async function fetchChefData() {
  try {
      const query = `*[_type == "chef"]{
                          "imageUrl": image.asset->url, 
                          name,
                          position,
                          }`;      
      const chef = await client.fetch(query);
      console.log("Chef Data Fetched Successfully");
      if (!chef.length) throw new Error('No Chef Found!');
      return chef;
  } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
  }
}