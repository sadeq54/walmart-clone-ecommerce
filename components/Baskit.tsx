import { getCartTotal } from "@/lib/getCartTotal";
import { groupedBySku } from "@/lib/groupedBySku";
import { useCartStore } from "@/store";
import Image from "next/image";
import AddToCart from "./AddToCart";
import { Button } from "./ui/button";


export default function Baskit() {
    const cart = useCartStore(state => state.cart);
    const grouped = groupedBySku(cart);
    const baskitTotale = getCartTotal(cart);

    return (
        <div className="max-w-7xl mx-auto ">
            <ul className="space-y-5 divide-y-2">
                {Object.keys(grouped).map((sku) => {
                    const item = grouped[sku][0]; // get the first item to get the sku
                    const total = getCartTotal(grouped[sku]);
                    return (
                        <li key={sku} className="p-5 my-2 flex justify-between items-center">
                            {item.content.general.images[0] && (
                                <Image
                                    src={item.content.general.images[0]}
                                    alt={item.content.general.title}
                                    width={100}
                                    height={100}
                                />
                            )}

                            <div className="flex space-x-4 pl-4">
                                <div>
                                    <p className="line-clamp-2 font-bold">
                                        {item.content.general.title}
                                    </p>
                                    <div
                                        dangerouslySetInnerHTML={{ __html: item.content.general.description }}
                                        className="line-clamp-1 font-light text-sm mt-2"
                                    />
                                </div>
                                <div className="flex flex-col border rounded-md p-5">
                                    <AddToCart product={item} />
                                    <p className="mt4 font-bold text-right"> {total}</p>
                                </div>
                            </div>
                        </li>
                    )
                }
                )}
            </ul>

            <div className="flex flex-col justify-end p-5 ">
                <p className="font-bold text-2xl text-right text-walmart mb-5 ">
                    Total: {cart.length === 0 ? "0.00" : baskitTotale}
                </p>
                <Button className="bg-walmart h-20 mt-5 hover:bg-walmart/50 self-center  text-white w-40  p-3">
                    Checkout
                </Button>

            </div>

        </div>
    )
}
