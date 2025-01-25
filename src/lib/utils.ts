import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fetchProducts = async (api: string) => {
  try {
      const res = await fetch(api);
      const data = await res.json();

      if(!res.ok) {
        throw new Error(data.error || "Failed to load products");
      }
      console.log("Fetched products: ", data);
      return {data};
  } catch (error: any) {
      console.error("Error fetching products", error);
      return {error: error.message};
  }
}
