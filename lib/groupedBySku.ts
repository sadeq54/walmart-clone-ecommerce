import { ProductResult } from "@/types/productTypings";



export function groupedBySku(product: ProductResult[]): Record<string , ProductResult[]>{
    return product?.reduce(
        (acc : Record<string , ProductResult[]>, curr : ProductResult) => {
        const sku = curr.content.general.meta.sku;
        if (!acc[sku]){
            acc[sku] = []
        }
        acc[sku].push(curr)
        return acc;
    },{})
}