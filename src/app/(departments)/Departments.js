"use client"
import Image from "next/image";
// import { departmentsData } from './DepartmentsData';
import { useEffect, useState } from "react";
import Link from "next/link";

import { departmentsData } from '../../Components/DepartmentsData';


// import { departmentsData } from './../../Components/DepartmentsData';
import Modal from './Modal';

const Departments = () => {

    const [itemsShow,setItemsShow] = useState([])

    useEffect(()=>{
        setItemsShow(departmentsData)
    },[])

    

    const [open,setOpen] = useState(false)
    const handleShow =(item)=>{
        // console.log(item)
        setOpen(true)
    }

    return (
        <div>
            <div className="w-[703px] mx-auto text-center pt-16">
                <h1 className="text-[40px] font-semibold mb-[13px]">Our Departments</h1>
                <p className="text-xs font-medium text-[#626C7A]">At Medicare, we are dedicated to providing exceptional care and improving the health and well-being of our community. Our state-of-the-art facilities, compassionate staff, and commitment to medical.</p>
            </div>
            <div className="w-[1320px] mx-auto grid grid-cols-3 gap-6 my-20">
                {
                    itemsShow?.map(item => <div
                        className="shadow rounded-xl"
                        key={item.id}
                    >
                        <div className="py-[42px] px-[57px]">
                            <Image className="mb-7" src={item?.image} width={68} height={68} alt="Loading" />
                            <h1 className="text-xl font-medium mb-[5px]">{item?.title}</h1>
                            <p className="text-xs font-medium text-[#626C7A] mb-7">{item?.description}</p>
                            <button onClick={()=> handleShow(item)} className="text-xs font-medium h-[32px] w-[96px]     border-2 border-[#2F2F2F] rounded hover:bg-[#0057B8] hover:text-white hover:border-none duration-200 delay-150">Read More</button>
                            {/* <Link href={`/item/${item?.id}`} className="text-xs font-medium h-[32px] w-[96px]     border-2 border-[#2F2F2F] rounded hover:bg-[#0057B8] hover:text-white hover:border-none duration-200 delay-150">Read More</Link> */}
                        </div>
                    </div>)
                }
            </div>

            {
                open &&   <Modal itemsShow={itemsShow}/>    
            }
            {/* <div className="bg-red-500 h-96 text-white flex flex-col items-center justify-center">hellow  </div>  */}
        </div>
    );
};

export default Departments;