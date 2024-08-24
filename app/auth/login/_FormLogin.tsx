"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"

import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {useRouter} from "next/navigation";
import {toast} from "sonner";
import axios from "axios";
import {saveRefreshTokenToLocalStorage, saveTokenToLocalStorage} from "@/Utils/jwt";

const FormSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
})

export default function _FormLogin() {
    const Router = useRouter()
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data)

        const host = process.env.NEXT_PUBLIC_API_HOST
        console.log(host)

        try {
            const res = await axios.post(`${host}/auth/login`, data, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if (res.status === 200){
                toast.success("Welcome back !")

                document.cookie = `authToken=${res.data.access_token}; path=/; secure; samesite=lax`;

                saveTokenToLocalStorage(res.data.access_token)
                saveRefreshTokenToLocalStorage(res.data.refresh_token)

                Router.push("/")
            }

        } catch (error : any ) {
            console.log(error)
            toast.error(error.response.data.error.message)
        }

    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 text-left">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type="email" placeholder="e.g johndoe@mail.com" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="**************" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <Button className="w-full" type="submit">Submit</Button>
                </form>
            </Form>


        </>
    )
}
