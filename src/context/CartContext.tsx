import {createContext, useState} from "react";
import type { CartProps } from "../types/cart";
import type { CartContextProps } from "../types/cartContext";

export const CartContext = createContext({} as CartContextProps)

interface CartProviderProps {
    children: React.ReactNode;
}

function CartProvider({ children }: CartProviderProps){
    const [cart, setCart] = useState<CartProps[]>([]);
    return(
        <CartContext.Provider value={{cart, cartAmount: cart.length}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;