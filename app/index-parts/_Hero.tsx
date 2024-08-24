// @flow
import * as React from 'react';

type Props = {

};
export const _Hero = (props: Props) => {
    return (
        <div className="w-full h-[80vh] overflow-hidden relative">
            <img className="object-cover" src="/assets/images/web/banner.png" alt="hero"/>
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
    );
};