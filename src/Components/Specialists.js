"use client"
import Image from 'next/image';
import Shadow2 from '@/assets/Shadow2.png'
import React, { useEffect, useState } from 'react';
import { SpecialistsData } from './SpecialistsData';
import { FaStar } from "react-icons/fa";

const Specialists = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setItems(SpecialistsData);
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <div className='w-[1320px] mx-auto'>
            <div className="w-[703px] mx-auto text-center">
                <h1 className='text-[40px] font-semibold'>Let’s meet our <span className="text-[#5AB32F]">specialists</span></h1>
                <p className="text-xs font-medium text-[#626C7A] pt-[13px]">At Medicare, we are dedicated to providing exceptional care and improving the health and well-being of our community. Our state-of-the-art facilities, compassionate staff, and commitment to medical.</p>
            </div>
            <div className='blur-sm'>
                <Image className='w-[437px] h-[550px] absolute left-[940px] top-[-150px]' src={Shadow2} alt="Loading..." />
            </div>
            {loading ? (
                <div className='text-center my-20'>
                    <p>Loading...</p>
                </div>
            ) : (
                <div className='grid grid-cols-3 gap-6 my-20'>
                    {
                        items.map(item =>
                            <div
                                key={item.id}
                            >
                                <div className="cardShadow rounded-lg relative bg-white">
                                    <div className=' w-[60px] pt-[35px]'>
                                        <p className='bg-[#E9E9E9] px-2 rounded-r-full flex items-center  gap-[1px] text-base font-medium'><FaStar className="text-[#FF9900]" />{item.rating}</p>
                                    </div>
                                    <div className='flex flex-col justify-center items-center'>
                                        <Image src={item?.authorImg} width={223} height={223} alt="Loading..." />
                                        <h1 className='text-xl text-[#0057B8] font-medium mt-[25px]'>{item?.name}</h1>
                                        <p className='text-base text-[#626C7A] font-normal mb-3'>{item?.title}</p>
                                        <div className="flex items-center gap-3 mb-[35px]">
                                            <div className="bg-[#5AB32F] w-[30px] h-[30px] rounded-full text-white  flex items-center justify-center" >
                                                <p className='w-5 h-5 flex items-center justify-center'>{item?.icons[0]}</p>
                                            </div>
                                            <div className="bg-[#5AB32F] w-[30px] h-[30px] rounded-full text-white  flex items-center justify-center" >
                                                <p className='w-5 h-5 flex items-center justify-center'>{item?.icons[1]}</p>
                                            </div>
                                            <div className="bg-[#5AB32F] w-[30px] h-[30px] rounded-full text-white  flex items-center justify-center" >
                                                <p className='w-5 h-5 flex items-center justify-center'>{item?.icons[2]}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            )}
        </div>
    );
};

export default Specialists;