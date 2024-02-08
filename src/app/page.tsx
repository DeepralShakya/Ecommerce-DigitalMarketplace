import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
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
        <h1 className="text-4xl font-bold text-grey-900 sm:text-5xl">Explore a digital asset marketplace for<span className="text-orange-600"> digital content</span>.</h1>
        <p className="mt-4 text-lg max-w-prose text-muted-foreground">Welcome to VirtuShoppe! Our team meticulously verifies each asset to guarantee top-tier quality standards.</p>
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <Link href="/products" className={buttonVariants()}>Browse Trending</Link>
          <button /*{variant='ghost'}*/ className="px-2">Quality Promise &rarr;</button>
        </div>
      </div>
    </MaxWidthWrapper>
    <section className="border-t border-gray-200 bg-gray-50">
      <MaxWidthWrapper className="py-24">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-0">
          {
            perks.map((perk) =>(
              <div key={perk.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-18 w-18 flex items-center justify-center rounded-full bg-orange-100 text-orange-900">
                  {<perk.Icon className="w-14 h-14"/>}
                  </div>
                </div>

                <div className="mt-5 md:ml-4 md:mt-0 lg:ml-0 lg:mt-5">
                  <h2 className="text-base font-medium text-gray-900">{perk.name}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{perk.description}</p>
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
