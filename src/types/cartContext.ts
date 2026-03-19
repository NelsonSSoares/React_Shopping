import type { CartProps } from "./cart";
import type { Product } from "./products";

export interface CartContextProps {
    cart: CartProps[];
    cartAmount: number;
    addItemCart: (newItem: Product) => void;
}
