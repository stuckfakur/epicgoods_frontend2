"use client"
import * as React from 'react';
import {useEffect} from "react";

type Props = {
    
};
export default function Page(props: Props) {
    const fetchData = async () => {
        const response = await fetch('/api/products');
        const data = await response.json();
        console.log(data)
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div>

        </div>
    );
};