'use client'
import Baskit from "@/components/Baskit";
import { ShoppingCartIcon } from "lucide-react";

export default function bage() {
    return (
        <div className="w-full p-10 max-w-7xl mx-auto">
            <div className="flex items-center space-x-2">
                <ShoppingCartIcon className="h-10  w-10" />
                <h1 className="text-3xl font-bold">Your Cart</h1>
            </div>
            <p className="mt-2 mb-5">
                Review the items in your cart and checkout when  ready!
            </p>
        <Baskit />
        </div>
    )
}
