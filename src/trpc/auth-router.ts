import { AuthCredentialsValidator } from "@/lib/validators/account-credentials-validators";
import { publicProcedure, router } from "./trpc";
import { getPayloadClient } from "@/get-payload";

export const authRouter = router({
    createPayloadUser: publicProcedure.input(AuthCredentialsValidator).mutation(({input}) => {
        const {email, password} = input
        const payload = await getPayloadClient()

        //check user exist or not
        // const {docs} = await payload.find({
        //     collection: "user"
        // })
    })
})