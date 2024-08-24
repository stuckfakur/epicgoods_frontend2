import * as React from "react"

import {Card, CardContent} from "@/components/ui/card"
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel"

export function _ItemTestimonial() {
    const testimonials = [
        {
            name: "David",
            messages: "Terimakasih sudah memberikan pelayanan yang bagus untuk kita!"
        },
        {
            name: "Sesha",
            messages: "Woow cepet banget barangnya diposes, makasih Kak !"
        },
        {
            name: "Samoa",
            messages: "Gatau mau komen apa, tapi ini emang worthit banget beli disini loh"
        },
        {
            name: "Erika",
            messages: "Gimana ya mau ngomongnya kalian yang belum pernah belanja disini buruan order barangnya bagus2"
        }
    ]
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full max-w-[1024px]"
        >
            <CarouselContent>
                {testimonials && testimonials.map((item, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card>
                                <CardContent
                                    className="flex flex-col aspect-video rounded-xl items-between justify-around py-2 pl-8">
                                    <div className="flex flex-col gap-2">
                                        <p>"{item.messages}"</p>
                                    </div>
                                    <div className="flex gap-5 items-center">
                                        <div className="w-16 aspect-square rounded-full bg-slate-100">

                                        </div>
                                        <div className="flex flex-col">
                                            <p>{item.name}</p>
                                            <p className="font-bold">Penjual</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
        </Carousel>
    )
}
