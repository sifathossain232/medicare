
"use client"
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import { hospitalData } from './AboutHospitalData';
import Image from "next/image";

const AboutHospital = () => {

    const [items, setItems] = useState([])
    useEffect(() => {
        setItems(hospitalData)
    }, [])

    return (
        <div className="w-[1079px] mx-auto bg-[#5AB32F33] py-[69px] px-[46px] rounded-[10px]">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <div>
                    {
                        items.map(item =>
                            <SwiperSlide key={item.id} className="pb-16">
                                <div className="flex gap-7 items-center justify-center">
                                    <div>
                                        <h1 className="text-[40px] font-semibold w-[472px]">What they <span className="text-[#5AB32F]">says about</span> our hospital</h1>
                                        <div className="w-[556px]">
                                            <h2 className="w-[50px] h-[50px] text-8xl my-8 text-[#5AB32F] font-medium">{item.dig}</h2>
                                            <p className="text-base">{item?.description}</p>
                                            <h3 className="text-xl font-medium mt-[42px]">{item?.name}</h3>
                                        </div>
                                    </div>
                                    <Image className="rounded-full w-[403px] h-[403px]" src={item?.image} width={403} height={403} alt="Loading..." />
                                </div>
                            </SwiperSlide>
                        )
                    }
                </div>
            </Swiper>
        </div>
    );
};

export default AboutHospital;