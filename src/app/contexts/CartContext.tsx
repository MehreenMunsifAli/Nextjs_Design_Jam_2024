import { createContext, ReactNode, useContext, useState } from "react";

interface CartItem {
    id: number; 
    name: string; 
    quantity: number; 
    price: number;
    totalAmount: number;
    imageUrl: string;
}

interface AddToCartItem {
    id: number; 
    name: string; 
    price: number;
    // quantity: number;
    // totalAmount: number;
    imageUrl: string;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: AddToCartItem, quantity: number) => void;
    totalItems: number;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, amount: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// create Provider
export const CartProvider = ({children}: {children: ReactNode}) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    // func to add product to cart
    const addToCart = (product: AddToCartItem, quantity: number) => {
        setCart((prev) => {
            const existingProduct = prev.find((item) => item.id === product.id);
            console.log("Product added to cart");
            if (existingProduct){
                return prev.map((item) => 
                    item.id === product.id 
                        ? {
                            ...item, 
                            quantity: item.quantity + quantity,
                            totalAmount: (item.quantity + quantity) * item.price,
                          }
                        : item
                );
            } else {
                return [...prev, {...product, quantity, totalAmount: product.price * quantity}];
            };
            
        });
        console.log(`Product added: ${product.name}, Quantity: ${quantity}`);

    };

    // calculate total items in cart
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    console.log("total items: ", totalItems);

    const removeFromCart = (productId: number) => {
        setCart((prev) => prev.filter((item) => item.id !== productId));
        console.log(`Product removed from cart`);
    }

    const updateQuantity = (productId: number, amount: number) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === productId
                    ? { 
                        ...item, 
                        quantity: Math.max(1, item.quantity + amount),
                        totalAmount: Math.max(1, item.quantity + amount) * item.price,
                    }
                    : item
            )
        );
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, totalItems, removeFromCart, updateQuantity }}>
          {children}
        </CartContext.Provider>
    );
};


// custom hook to use cart context
export const useCart = () => {
    const context = useContext(CartContext);
    if(!context) {
        throw new Error("useCart must be used within a CartProvider");
    } else {
        return context;
    }
} 