// @flow
import * as React from 'react';
import {_ItemTestimonial} from "@/app/index-parts/_ItemTestimonial";

type Props = {

};
export const _Testimonial = (props: Props) => {
    return (
        <div className="w-full h-[400px] relative flex items-center justify-center bg-slate-100 overflow-hidden">
            <div className="grid justify-items-center gap-10 relative z-10">
                <div className="bg-white py-4 px-6 rounded-lg text-xl">
                    Mereka yang berlangganan
                </div>
                <div className="">
                    <_ItemTestimonial/>
                </div>
            </div>
            <div className="absolute inset-x-0 bg-contain">
                <img className="h-[400px]" src="/assets/images/web/bg-testi.png" alt=""/>
            </div>
        </div>
    );
};