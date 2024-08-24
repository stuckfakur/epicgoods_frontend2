// @flow 
import * as React from 'react';
import {Input} from "@/components/ui/input";
import {BiSearch} from "react-icons/bi";

type Props = {
    
};
export const _CommandSearch = (props: Props) => {
    return (
        <div className="w-full px-5">
            <form action="" className="relative">
                <Input placeholder="Cari di Epic Goods" className="placeholder:pl-4"></Input>
                <BiSearch className="absolute left-2 top-3"/>
            </form>
        </div>
    );
};