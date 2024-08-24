import {_Hero} from "@/app/index-parts/_Hero";
import {_PopularGoods} from "@/app/index-parts/_PopularGoods";
import {_CategoryRecommendation} from "@/app/index-parts/_CategoryRecommendation";
import {_WhyEpicGoods} from "@/app/index-parts/_WhyEpicGoods";
import {_Testimonial} from "@/app/index-parts/_Testimonial";

export default function Home() {
    return (
        <main>
            <header>
                <_Hero/>
            </header>
            <section className="flex justify-center w-full gap-5 mt-5">
                <div className="grid justify-items-center gap-5 max-w-[1024px]">
                        <_CategoryRecommendation/>

                        <_PopularGoods/>

                        <_WhyEpicGoods/>
                </div>

            </section>
            <_Testimonial/>


        </main>
    );
}
