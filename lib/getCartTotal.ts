import { ProductResult } from "@/types/productTypings";

export const getCartTotal = (products: ProductResult[]) : string  =>{
    const total = products.reduce((accumalatoer : number , currentProduct : ProductResult ) => {
        return accumalatoer + currentProduct.content.price.price;
        
    }, 0)
    return `${products[0]?.content.price.currency} ${total.toFixed(2)}`
}

