import { createContext, useState } from "react";
import type { CartProps } from "../types/cart";
import type { CartContextProps } from "../types/cartContext";
import type { Product } from "../types/products";

export const CartContext = createContext({} as CartContextProps)

interface CartProviderProps {
    children: React.ReactNode;
}

function CartProvider({ children }: CartProviderProps){

    const [cart, setCart] = useState<CartProps[]>([]);

    function addItemCart(newItem: Product){
        const idexItem = cart.findIndex(item => item.id === newItem.id);
        
        if(idexItem != -1){
            const cartList = cart;
            cartList[idexItem].amount = cartList[idexItem].amount + 1;
            cartList[idexItem].total = cartList[idexItem].amount * cartList[idexItem].price;
            setCart(cartList);
            return;
        }

        const data ={
            ...newItem,
            amount: 1,
            total: newItem.price    
        }
        setCart(products => [...products, data]);   
    }

    return(
        <CartContext.Provider value={{cart, cartAmount: cart.length, addItemCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;