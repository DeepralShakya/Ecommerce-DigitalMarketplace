"use client"

import { PRODUCT_CATEGORIES } from "@/config"
import { Button } from "./ui/button"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

type Category = typeof PRODUCT_CATEGORIES[number]

interface NavItemProps {
    category: Category,
    handleOpen: () => void,
    isOpen: Boolean,
    isAnyOpen: Boolean
}

const NavItem = ({isAnyOpen, category, handleOpen, isOpen}:NavItemProps) => {
    return <div className="flex ">
        <div className="relative flex items-center">
            <Button className="gap-2" onClick={handleOpen} variant={isOpen? "secondary" : "ghost"}>
                {category.label}
                <ChevronDown className={cn("h-4 w-4 transition-all text-muted-foreground", 
                {
                    "-rotate-180": isOpen,
                })}
                />
            </Button>
        </div>

        {isOpen? (
            <div className={cn("absolute inset-x-0 top-full text-sm text-muted-foreground", {
                "animate-in fade-in-10 slide-in-from-top-5": !isOpen,
            })}>
                <div className="absolute inset-0 top-1/2 bg-white" aria-hidden="true"/>
                <div className="relative bg-white shadow-lg">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-18">
                            <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8">
                                {category.featured.map((item) => (
                                    <div key={item.name} className="group relative text-base sm:text-sm mt-4">
                                        <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-70">
                                            <Image src={item.imageSrc} alt="Product category image" fill className="object-cover object-center"/>
                                        </div>
                                        <Link href={item.href} className="mt-6 block font-medium text-gray-900 text-center">
                                            {item.name}
                                        </Link>
                                        <h4 className="mt-1 mb-2 text-center" aria-hidden="true">Shop Now</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ): null}
    </div>
}

export default NavItem