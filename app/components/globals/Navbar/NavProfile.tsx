"use client"
import * as React from 'react';
import {useEffect, useState} from 'react';
import {Button} from "@/components/ui/button";
import {BiCartAlt} from "react-icons/bi";
import {getUserFromLocalStorage} from "@/Utils/jwt";
import Link from "next/link";
import {useRouter} from "next/navigation";
import axios from "axios";
import {toast} from "sonner";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger
} from "@/components/ui/menubar";

type Props = {};
export default function _NavProfile(props: Props) {
    const [username, setUsername] = useState<string | null>(null);

    useEffect(() => {
        const user = getUserFromLocalStorage();
        if (user && user.sub && user.sub.name) {
            setUsername(user.sub.name);
        }
    }, []);

    const Router = useRouter()
    const handleLogout = () => {
        const host = process.env.NEXT_PUBLIC_API_HOST
        axios.post(`${host}/auth/logout`, {
        }, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
        })
            .then(() => {
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                localStorage.removeItem('refresh_token')
                toast.success("Youre been logout successfully")
                Router.push('/auth/login')
            })
            .catch((err) => {
                console.log(err)
                toast.error("Something wrong")
            })
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('refresh_token')

    }

    return (
        <>
            <div className="flex flex-nowrap gap-2 items-center">
                <BiCartAlt className="w-[30px] h-[30px]"/> |
                {username ? (
                    <>
                        <Button variant="outline" className="">Seller</Button>
                        <Menubar>
                            <MenubarMenu>
                                <MenubarTrigger className="whitespace-nowrap">{username && username ? username : 'John Doe'}</MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem></MenubarItem>
                                    <MenubarItem>My Account</MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>Orders</MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>Settings</MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem onClick={handleLogout}>Logout</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    </>
                ) : (
                    <>
                        <Link href={"/auth/login"}>
                            <Button variant="outline" className="">Masuk</Button>
                        </Link>
                        <Link href={"/auth/register"}>
                            <Button className="">Daftar</Button>
                        </Link>
                    </>
                )}
            </div>
        </>
    );
};