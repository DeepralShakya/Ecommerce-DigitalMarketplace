"use client"

import { ShoppingCart } from "lucide-react"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Separator } from "./ui/separator"
import { formatPrice } from "@/lib/utils"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import Image from "next/image"

const itemCount = 0

const fee = 0

const Cart = () =>{
    return <Sheet>
        <SheetTrigger className="group -m-2 flex items-center p-2">
            <ShoppingCart aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-orange-400 group-hover:text-orange-600"></ShoppingCart>
            <span className="ml-2 text-sm font-medium text-black group-hover:text-orange-800">100</span>
        </SheetTrigger>
        <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
            <SheetHeader className="space-y-3 pr-6">
                <SheetTitle>Cart(0)</SheetTitle>
            </SheetHeader>
            {itemCount > 0 ? (
                <>
                    <div className="flex w-full flex-col pr-6">
                        Cart Items
                    </div>
                    <div className="space-y-4 pr-6">
                        <Separator/>
                        <div className="space-y-2 text-sm">
                            <div className="flex">
                                <span className="flex-1">Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className="flex">
                                <span className="flex-1">Transaction Fee</span>
                                <span>{formatPrice(fee)}</span>
                            </div>
                            <div className="flex">
                                <span className="flex-1">Total</span>
                                <span>{formatPrice(fee)}</span>
                            </div>
                        </div>

                        <SheetFooter>
                            <SheetTrigger className="w-full">
                                <Link href='/cart' className={buttonVariants({
                                    className: "w-full",
                                })}>Checkout</Link>
                            </SheetTrigger>
                        </SheetFooter>
                    </div>
                </>
            ) : (<div className="flex h-full flex-col items-center justify-center space-y-1">
                <div aria-hidden="true" className="relative mb-4 h-60 w-60 text-muted-foreground">
                    <Image src='/images/empty_cart.jpg' fill alt="Empty Shopping Card"/>
                </div>
                <div className="text-xl font-bold">
                    Empty Cart
                </div>
                <SheetTrigger className="w-full">
                    <Link href='/products' className={buttonVariants({
                        variant: "link",
                        size: "sm",
                        className: "text-sm text-muted-foreground"
                    })}>
                        Add items to your cart
                    </Link>
                </SheetTrigger>
            </div>)}
        </SheetContent>
    </Sheet>
}

export default Cart