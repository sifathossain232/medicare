"use client"
import Image from "next/image";
import Ellipse from "@/assets/Shadow.png";
import { useEffect, useState } from "react";
import { departmentsData } from '../../Components/DepartmentsData';
import Modal from './Modal';

const Departments = () => {

    const [itemsShow, setItemsShow] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setItemsShow(departmentsData);
            setLoading(false); // Set loading to false after data is fetched
        }, 1000);
    }, [])

    const [item, setItems] = useState()

    const [open, setOpen] = useState(false)

    const handleShow = (item) => {
        setOpen(true)
        setItems(item)
    }

    const close = () => {
        setOpen(false)
    }

    return (
        <div className=" w-[1440px] mx-auto ">
            <div className="absolute top-[1920px]  left-82 blur-sm">
                <Image className=" h-[550px]" src={Ellipse} alt="Loading..." />
            </div>
            <div className="w-[703px] mx-auto text-center pt-16 relative">
                <h1 className="text-[40px] font-semibold mb-[13px]">Our Departments</h1>
                <p className="text-xs font-medium text-[#626C7A]">At Medicare, we are dedicated to providing exceptional care and improving the health and well-being of our community. Our state-of-the-art facilities, compassionate staff, and commitment to medical.</p>
            </div>
            <div className="relative w-[1320px] mx-auto ">
                {loading ? (
                    <div className='text-center my-20'>
                        <p>Loading...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-3 gap-6 my-20">
                        {
                            itemsShow?.map(item => <div
                                className=""
                                key={item.id}
                            >
                                <div className="py-[42px] px-[57px] bg-white  rounded-xl cardShadow">
                                    <Image className="mb-7" src={item?.image} width={68} height={68} alt="Loading" />
                                    <h1 className="text-xl font-medium mb-[5px]">{item?.title}</h1>
                                    <p className="text-xs font-medium text-[#626C7A] mb-7">{item?.description}</p>
                                    <button onClick={() => handleShow(item)} className="text-xs font-medium h-[32px] w-[96px] border-2 border-[#2F2F2F] rounded hover:bg-[#0057B8] hover:text-white hover:border-none duration-100">Read More</button>
                                </div>
                            </div>)
                        }
                    </div>
                )}
                <div className="absolute top-[25%] w-96 left-[34%]">
                    {
                        open && <Modal item={item} close={close} />
                    }
                </div>
            </div>
        </div>
    );
};

export default Departments;