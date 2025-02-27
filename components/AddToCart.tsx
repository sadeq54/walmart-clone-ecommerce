'use client'
import { useCartStore } from '@/store'
import { ProductResult } from '@/types/productTypings'
import { Button } from './ui/button'
import RemoveItemFromCart from './RemoveItemFromCart';

export default function AddToCart({ product }: { product: ProductResult }) {
    const cart = useCartStore(state => state.cart);
    const addToCart = useCartStore(state => state.addToCart);
    

    const howManyInCart = cart.filter(p => p.content.general.meta.sku === product.content.general.meta.sku).length;

    const handleAdd = () => {
        addToCart(product);
    }

    if (howManyInCart > 0) {
        return (
            <div className='flex items-center space-x-5'>
                {<RemoveItemFromCart product={product} />}
                <span>{howManyInCart}</span>
                <Button onClick={handleAdd} className='bg-walmart hover:bg-walmart/50'>
                    +
                </Button>
            </div>
        )
    }

    return (
        <Button onClick={handleAdd} className='bg-walmart hover:bg-walmart/50'>
            Add to Cart
        </Button>
    )
}
