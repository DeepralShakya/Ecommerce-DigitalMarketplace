import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Icons } from "./Icons"
import NavItems from "./NavItems"
import { buttonVariants } from "./ui/button"
import Cart from "./Cart"

const Navbar = () => {

    const user = null

   return(
        <div className="bg-orange-100 sticky z-50 top-0 inset-x-0 h-16">
            <header className="relative bg-orange-100">
                <MaxWidthWrapper>   
                    <div className="border-b border-green-300">
                        <div className="flex h-16 items-center">
                            <div className="ml-4 flex lg:ml-0">
                                <Link href="/">
                                    <Icons.logo className="h-14 w-14"/>
                                </Link>
                            </div>
                            <div className="z-50 lg:ml-8 lg:block lg:self-stretch">
                                <NavItems/>
                            </div>

                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    {user ? null: (
                                    <Link href='sign-in' className={buttonVariants({variant: "ghost"})}>Sign in</Link>
                                    )}

                                    {user ? null: <span className="h-6 w-px bg-orange-300" aria-hidden="true"/>}

                                    {user ? <p></p> : (<Link href="/sign-up" className={buttonVariants({variant: "ghost"})}>Create Account</Link>)}

                                    {user ? <span className="h-6 w-px bg-orange-300" aria-hidden="true"/> : null}

                                    {user ? null : <div className="flex lg:ml-6">
                                            <span className="h-6 w-px bg-orange-300" aria-hidden="true"/>
                                        </div>}

                                    <div className="ml-4 flow-root lg:ml-6">
                                        <Cart/>
                                    </div>
                                </div>      
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
   ) 
}

export default Navbar