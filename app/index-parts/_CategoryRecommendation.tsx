"use client"
import * as React from 'react';
import Link from "next/link";
import {useEffect, useState} from "react";

type Props = {
    limit? : number
};

type Category = {
    id : number
    category_photo: string
    category_name: string
    category_slug: string
}
export const _CategoryRecommendation = ({limit = 5}: Props) => {
    const [categories, setCategories] = useState<Category[]>([])
    const fetchData = async () => {
        const response = await fetch('/api/category');
        const data = await response.json();
        setCategories(data.data)
        console.log(data)
    }

    useEffect(() => {
        fetchData()
    }, []);
    return (
        <div className="max-w-[1024px] w-full border rounded-lg shadow py-2 px-4">
            <div className="flex justify-between">
                <p className="text-lg font-bold">
                    Rekomendasi Kategori
                </p>
                <Link href="#">
                    Lihat semua Kategori {">>>"}
                </Link>
            </div>
            <div className="grid grid-cols-5 grid-row-1 mx-auto gap-5 mt-4">
                {categories &&
                    categories.slice(0, limit).map(item => (
                        <Link key={item.id} href={item.category_slug || "/"}>
                            <div className="flex flex-col gap-2 items-center">
                                <div className="w-full aspect-square relative flex items-center justify-center">
                                    <img className="relative z-10" src={item.category_photo} alt=""/>
                                    <div className="bg-slate-200 absolute inset-0 rounded-full absolute w-full aspect-square"></div>
                                </div>
                                <p className=" text-sm">
                                    {item.category_name}
                                </p>
                            </div>
                        </Link>
                    ))
                }
            </div>

        </div>
    );
};