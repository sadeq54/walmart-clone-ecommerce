'use client'
import Baskit from "@/components/Baskit"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    
} from "@/components/ui/dialog"
import { useRouter } from "next/navigation"

export default function BasketInterception() {
    const router = useRouter()
     function onDismiss() {
         router.back()
     }
    return (
        <Dialog open
        onOpenChange={(isOpen)=>{
            if (!isOpen) {
                onDismiss()
            }
        }}
        >
            <DialogContent >
                <DialogHeader>
                    <DialogTitle>Basket</DialogTitle>
                    <DialogDescription>
                       <span>Contents of your basket</span>
                    </DialogDescription>
                </DialogHeader>
                <Baskit />
            </DialogContent>
        </Dialog>
    )
}
