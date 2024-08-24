// @flow
import * as React from 'react';
import _NavProfile from "@/app/components/globals/Navbar/NavProfile";
import Link from "next/link";
import {_CommandSearch} from "@/app/components/globals/Navbar/_CommandSearch";

type LinkTypes = {
    name : string
    url : string
}[]
export default function __Navbar() {

    const links : LinkTypes = [
        {
            name: "Kami",
            url: "#"
        },
        {
            name: "|",
            url: "#"
        },
        {
            name: "Brand",
            url: "#"
        },
        {
            name: "|",
            url: "#"
        },
        {
            name: "Testimoni",
            url: "#"
        },

    ]



    return (
        <nav className="sticky top-0 z-20 w-full ">
            <div className="w-full h-[20px] bg-slate-100 flex justify-end flex-nowrap gap-2 px-10 text-sm">
                {links && (
                    links.map((item, index) => (
                        <Link key={index} href={item.url} className="text-slate-400 hover:text-black"> {item.name} </Link>
                    ))
                )}
            </div>
            <div className="py-3 bg-[#FFE6A2]">
                <div className="h-[50px] flex flex-nowrap max-w-[1024px] mx-auto items-center">
                    <div className="w-[200px] flex justify-center">
                        <img className="w-full" src="/assets/images/web/landinglogo.png" alt="logo"/>
                    </div>
                    <div className="w-full">
                        <div className="flex i">
                            <_CommandSearch/>
                        </div>
                    </div>
                    <div className="w-[300px] ">
                        <_NavProfile/>
                    </div>
                </div>
            </div>
        </nav>
    );
}
