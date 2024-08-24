"use client"
import * as React from 'react';
import {useEffect, useState} from 'react';
import Link from "next/link";
import {Skeleton} from "@/components/ui/skeleton";
import {BiSolidStar, BiSolidStore} from "react-icons/bi";

type Props = {};
type Items = {
    id: number
    is_discount: boolean
    product_condition: string
    product_detail: string
    product_photo: string
    product_gallery: object
    product_name: string
    product_price: number
    product_price_discount: number
    product_slug: string
    product_stock: number
    seller: {
        store_name: string
    }
}

export const _PopularGoods = (props: Props) => {
    const [items, setItems] = useState<Items[]>([])
    const fetchData = async () => {
        const response = await fetch('/api/products');
        const data = await response.json();
        setItems(data.data)
        console.log(data)
    }

    useEffect(() => {
        fetchData()
    }, []);
    return (
        <div className="max-w-[1024px] w-full border rounded-lg shadow py-2 px-4">
            <div className="flex justify-between">
                <p className="text-lg font-bold">
                    Barang Populer
                </p>
                <Link href="#">
                    Lihat semua barang {">>>"}
                </Link>
            </div>
            <div className="grid grid-cols-5 grid-row-1 mx-auto gap-5 mt-4">
                {items &&
                    items.map(item => (
                        <Link key={item.id} href={item.product_slug || "/"}>
                            <div className="flex flex-col gap-2 items-center">
                                <div className="w-full aspect-square relative overflow-hidden bg-slate-100">
                                    {item.product_photo !== null || item.product_photo !== "" ?
                                        <img className="w-full object-cover" src={item.product_photo} alt=""/> :
                                        <Skeleton className="w-full aspect-square"/>
                                    }
                                </div>
                                <p className="text-sm whitespace-nowrap truncate overflow-hidden">
                                    {item.product_name}
                                </p>
                                {item.is_discount ? (
                                        <>
                                            <div className="grid gap-1 grid-cols-2 grid-row-1">
                                                <span>{item.product_price_discount}</span><span
                                                className="line-through">{item.product_price}</span>
                                            </div>
                                        </>
                                    )
                                    : (
                                        <>
                                            <div className="flex">
                                                <span>{item.product_price}</span>
                                            </div>
                                        </>
                                    )
                                }
                                <div className="flex">
                                    <BiSolidStar className="text-yellow-600" /> <span>4,9 </span> <span>100+ Terjual</span>
                                </div>
                                <div className="flex">
                                    <BiSolidStore className="text-blue-600" /> <span>{item.seller.store_name}</span>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};