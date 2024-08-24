// @flow
import * as React from 'react';
import {Button} from "@/components/ui/button";
import {BiCartAlt} from "react-icons/bi";

type Props = {

};
export default function _NavProfile(props: Props) {
    return (
        <div className="flex flex-nowrap gap-2 items-center">
            <BiCartAlt className="w-[30px] h-[30px]" /> | <Button variant="outline" className={""}>Masuk</Button><Button className="">Daftar</Button>
        </div>
    );
};