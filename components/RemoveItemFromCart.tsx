import { useCartStore } from "@/store";
import { ProductResult } from "@/types/productTypings";
import { Button } from "./ui/button";

export default function RemoveItemFromCart({product} : {product: ProductResult}) {
    const romveFromCart = useCartStore(state => state.removeFromCart);

    const handleRemove = () => {    
        romveFromCart(product);
    }
    return (
    <Button onClick={handleRemove} className='bg-walmart hover:bg-walmart/50'>-</Button> 
  )
}
