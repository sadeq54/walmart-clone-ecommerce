/// we need the zustand to make sure that the pasket values is stored /
// it work like the cookie and we will wrap the intire layout , because it is the 
// a data provider 

import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { ProductResult } from './types/productTypings'
//import type {} from '@redux-devtools/extension' // required for devtools typing

interface CartState {
    cart: ProductResult[]; // the is the product value ,and mae sure that when u retuen after the change , the value must bi in an object 
    addToCart: (product: ProductResult) => void; // the state function that take the product and return nothing 
    removeFromCart: (product: ProductResult) => void;
}

export const useCartStore = create<CartState>()(
    devtools(
        persist( // this make sure that the data inside the pasket is stored , uit work like the session 
            (set, get) => ({
                cart: [],
                addToCart: (product) => {
                    set((state ) => ({
                        cart: [...state.cart, product]
                    }));
                },
                removeFromCart(product) {
                    const productToRemove = get().cart.findIndex(
                        (p) => p.content.general.meta.sku === product.content.general.meta.sku 
                    );
                    
                    set((state) => {
                        const newCart = [...state.cart];
                        newCart.splice(productToRemove ,1)
                        return {cart: newCart};
                    })
                },
            }),
            {
                name: 'shopping-cart-store',
            },
        ),
    ),
)