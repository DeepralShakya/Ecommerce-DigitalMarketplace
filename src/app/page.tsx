import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import { buttonVariants, Button } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description: "Get your assets delivered instantly to your inbox and start downloading right away." 
  },
  {
    name: "Guarenteed Quality",
    Icon: CheckCircle,
    description: "Every item on our platform is swiftly verified by our team to ensure the utmost quality assurance." 
  },
  {
    name: "GreenPromise",
    Icon: Leaf,
    description: "With every purchase, we dedicate 1% to safeguarding and nurturing our precious natural world." 
  },
  
] 

export default function Home() {
  return(
  <>
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Explore a digital asset marketplace for<span className="text-orange-600"> digital content</span>.</h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">Welcome to VirtuShoppe! Our team meticulously verifies each asset to guarantee top-tier quality standards.</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/products" className={buttonVariants()}>Browse Trending</Link>
          <Button variant='ghost' className="px-2">Quality Promise &rarr;</Button>
        </div>
      </div>

      <ProductReel query={{sort: "desc", limit: 4}} href="/products?sort=recent" title='Brand New'/>
      
    </MaxWidthWrapper>

    <section className="border-t border-gray-200 bg-gray-50">
      <MaxWidthWrapper className="py-20">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {
            perks.map((perk) =>(
              <div key={perk.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-orange-100 text-orange-900">
                  {<perk.Icon className="w-1/3 h-1/3"/>}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h2 className="text-base font-medium text-gray-900">{perk.name}</h2>
                  <p className="mt-3 text-sm text-muted-foreground">{perk.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </MaxWidthWrapper>
    </section>
  </>
  )
}
