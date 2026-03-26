import { createContext, useState } from "react";
import type { CartProps } from "../types/cart";
import type { CartContextProps } from "../types/CartContextProps";
import type { Product } from "../types/products";

export const CartContext = createContext({} as CartContextProps)

interface CartProviderProps {
    children: React.ReactNode;
}

function CartProvider({ children }: CartProviderProps){
   
    const [cart, setCart] = useState<CartProps[]>([]);
    const [totalCart, setTotalCart] = useState<string>("");

    function removeItemCart(product: CartProps){
        const indexItem = cart.findIndex(item => item.id === product.id);
        if(cart[indexItem]?.amount > 1){
            const cartList = [...cart];
            cartList[indexItem].amount = cartList[indexItem].amount - 1;
            cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price;
            totalResultCart(cartList);
            return;
        }
        const removeItem = cart.filter(item => item.id !== product.id);
        setCart(removeItem);
        totalResultCart(removeItem);
    }

    function totalResultCart(items: CartProps[]){
        const myCart = items;
        const result = myCart.reduce((acc, item)=>{return acc + item.total}, 0);
        const formatedResult = result.toLocaleString("pt-BR", {  style: "currency", currency: "BRL", });
        setTotalCart(formatedResult);
    }



    function addItemCart(newItem: Product){
        const idexItem = cart.findIndex(item => item.id === newItem.id);
        
        if(idexItem != -1){
            const cartList = cart;
            cartList[idexItem].amount = cartList[idexItem].amount + 1;
            cartList[idexItem].total = cartList[idexItem].amount * cartList[idexItem].price;
            setCart(cartList);
            totalResultCart(cartList);
            return;
        }

        const data ={
            ...newItem,
            amount: 1,
            total: newItem.price    
        }
        setCart(products => [...products, data]);   
        totalResultCart([...cart, data]);
    }

    return(
        <CartContext.Provider value={{cart, cartAmount: cart.length, addItemCart, removeItemCart, total: totalCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;