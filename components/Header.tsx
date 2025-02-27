'use client'
import { getCartTotal } from "@/lib/getCartTotal";
import { useCartStore } from "@/store";
import { Grid2X2, Heart, LayoutGrid, Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function Header() {
    const router = useRouter()
    const cart = useCartStore(state => state.cart);
    const total = getCartTotal(cart);
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const input = e.currentTarget.input.value;
        router.push(`/search?q=${input}`)
    }

    return (
        <header className="flex flex-col md:flex-row  bg-walmart items-center px-7 py-10 space-x-5" >
            <Link href='/' className="mb-5 md:mb-0">
                <Image
                    src="https://i5.walmartimages.com/dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg"
                    alt="walmart logo"
                    width={150}
                    height={150}
                />
            </Link>
            <form
                onSubmit={handleSubmit}
                className="flex items-center bg-white rounded-full w-full flex-1">
                <input
                    type="text"
                    name="input"
                    placeholder="Search Everything..."
                    className="flex-1 px-4 x  rounded-l-full outline-none placeholder:text-sm" />
                <button className="rounded-full h-10 w-10 px-2 cursor-pointer bg-yellow-400" >
                    <Search className="rounded-full h-10" />
                </button>
            </form>

            <div className="flex space-x-5 mt-5 md:mt-0">
                <Link href="/"
                    className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm"
                >
                    <Grid2X2 size={20} />
                    <p>Departments</p>
                </Link>

                <Link href="/"
                    className="hidden xl:flex  text-white font-bold items-center space-x-2 text-sm"
                >
                    <LayoutGrid size={20} />
                    <p>Services</p>
                </Link>

                <Link href="/"
                    className="flex text-white font-bold items-center space-x-2 text-sm"
                >
                    <Heart size={20} />
                    <div>
                        <p className="text-xs font-extralight">Reorder</p>
                        <p>My Items</p>
                    </div>
                </Link>

                <Link href="/"
                    className="flex text-white font-bold items-center space-x-2 text-sm"
                >
                    <User size={20} />
                    <div>
                        <p className="text-xs font-extralight">Sign In</p>
                        <p>Account</p>
                    </div>
                </Link>

                <Link href="/basket"
                    className="flex items-center space-x-2 text-white text-sm  font-bold "
                >
                    <ShoppingCart size={20} />
                    <div>
                        <p className="text-xs font-extralight">
                            {cart.length > 0 ? `${cart.length} items` :  "No items" }
                            </p>
                        <p>{cart.length > 0 ? `${total}` : "0"}</p>
                    </div>
                </Link>
            </div>
        </header>
    )
}
