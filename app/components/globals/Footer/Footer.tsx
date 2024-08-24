// @flow
import * as React from 'react';
import Link from "next/link";
import {BiLogoInstagram, BiLogoYoutube} from "react-icons/bi";

export default function __Footer() {
    const menus = [
        {
            name : "Menu",
            url: "#"
        },
        {
            name : "Home",
            url: "#"
        },
        {
            name : "Product",
            url: "#"
        },
        {
            name : "Testimonial",
            url: "#"
        }
    ]
    return (
        <div className="w-full bg-[#FFE6A2] h-[300px] flex items-center">
            <div className="max-w-[1024px] mx-auto flex">
                <div className="grid w-[300px] justify-items-center">
                    <img className="w-[250px]" src="/assets/images/web/logo.png" alt=""/>
                    <div className="text-left">
                        <p className="text-lg font-bold">PT. Menjadi Software Engineer</p>
                        <p>Grand Indonesia Plaza</p>
                        <p>Jakarta Pusat</p>
                    </div>
                </div>
                <div className="flex w-[300px] items-center flex-col gap-3 mt-[70px]">
                    {menus &&  menus.map((item, index) => (
                        <Link key={index} className="text-slate-600 hover:text-black" href={item.url}>{item.name}</Link>
                    ))}
                </div>
                <div className="flex w-[300px] items-center flex-col gap-3 mt-[70px]">
                    <p className="font-bold">Contact us</p>
                    <p>email@example.com</p>
                    <p className="font-bold">Social media</p>
                    <div className="flex gap-2">
                        <BiLogoInstagram  className="w-8 h-8"/>
                        <BiLogoYoutube className="w-8 h-8" />
                    </div>
                </div>

            </div>
        </div>
    );
};