import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(
  price: number | string,
  options: {
    currency?: "NPR",
    notation?: Intl.NumberFormatOptions["notation"] 
  } = {}
){
  const {currency = "NPR", notation = "compact"} = options

  const numericPrice = typeof price === "string" ? parseFloat(price) : price 

  return new Intl.NumberFormat("en-NP", {
    style: "currency",
    currency,
    notation,
    maximumFractionDigits: 2
  }).format(numericPrice)
}