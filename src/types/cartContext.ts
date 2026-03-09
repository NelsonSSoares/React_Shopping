import type { CartProps } from "./cart";

export interface CartContextProps {
    cart: CartProps[];
    cartAmount: number;
}
