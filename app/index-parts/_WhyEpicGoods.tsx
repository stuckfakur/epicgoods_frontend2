// @flow
import * as React from 'react';

type Props = {

};

type Items = {
    photo : string
    title: string
    id: number
}[]
export const _WhyEpicGoods = (props: Props) => {

    const items : Items = [
        {
            title: "Kulaitas Produk Terjamin",
            photo: "/assets/images/web/whyme-1.png",
            id: 1
        },
        {
            title: "Banyak Promo Murah Meriah",
            photo: "/assets/images/web/whyme-2.png",
            id: 2
        },
        {
            title: "Bantuan Layanan dan Live Service",
            photo: "/assets/images/web/whyme-3.png",
            id: 3
        }

    ]
    return (
        <div className="w-full h-[400px] relative flex justify-center">
            <div className="grid">
                <div className="bg-white py-4 px-6 rounded-lg">
                    Kenapa harus Epic Goods ?
                </div>
                <div className="grid grid-cols-3 grid-row-1 gap-3">
                    {items &&
                        items.map(item => (
                            <div key={item.id} className="w-full aspect-video relative bg-slate-100 overfow-hidden bg-cover ">
                                <img className="bg-cover" src={item.photo} alt={item.title}/>
                                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                                <p className="absolute z-10 text-white w-[70%] text-2xl bottom-5 left-5">
                                    {item.title}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};