"use client"

import { Icons } from "@/components/Icons"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import {useForm} from 'react-hook-form'
import { z } from 'zod'
import { AuthCredentialsValidator, TAuthCredentialsValidator } from "@/lib/validators/account-credentials-validators"
import { trpc } from "@/trpc/client"

const Page = () =>{

const { register, handleSubmit, formState: {errors} } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator)
})

const { data } = trpc.anyApiRoute.useQuery()
console.log(data)

const onSubmit = ({email, password}: TAuthCredentialsValidator) => {

}

    return <>
        <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] ">
                <div className="flex flex-col items-center space-y-2 text-center">
                    <Icons.logo className="h-20 w-20"/>
                    <h1 className="text-2xl font-bold">
                        Create An Account
                    </h1>
                </div>

                <div className="grid gap-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-2">
                            <div className="grid gap-1 py-2">
                                <Label htmlFor="email">Email: </Label>
                                <Input {...register("email")} className={cn({
                                    "focus-visible:ring-orange-400": errors.email
                                })}
                                placeholder="you@example.com"/>
                            </div>
                            <div className="grid gap-1 py-2">
                                <Label htmlFor="email">Password: </Label>
                                <Input {...register("password")} className={cn({
                                    "focus-visible:ring-orange-400": errors.password
                                })}
                                placeholder="Password"/>
                            </div>
                            <div>
                                <Link href='/sign-in' className={buttonVariants({variant: "link", className: "gap-1"})}>Already have an account? Sign-in
                                    <ArrowRight className="h-4 w-4"/>
                                </Link>
                            </div>   
                            <Button>Sign Up</Button>  
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default Page