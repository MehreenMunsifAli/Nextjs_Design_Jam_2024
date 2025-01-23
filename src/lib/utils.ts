import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fetchProducts = async (api: string) => {
  try {
      const res = await fetch(api);
      if (!res.ok) throw new Error("Failed to fetch products");
      const data = await res.json();
      console.log("Fetched products: ", data);
      return data;
  } catch (error) {
      console.error("Error fetching products", error);
      return null;
  }
}
