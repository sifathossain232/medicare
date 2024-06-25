import Image from 'next/image';
import Ellipse from '@/assets/Ellipse16.png';
import nurse from '@/assets/Group 92.png';
// import nurse2 from '@/assets/nurse2.png';
import { LiaBabyCarriageSolid } from "react-icons/lia";
import { RiHospitalLine } from "react-icons/ri";
import { LuStethoscope } from "react-icons/lu";


const Banner = () => {
    return (
        <div className='w-[1440px] m-auto'>
            {/* <div className=''> */}
            <div className='mx-[60px] flex'>
                <div className='w-[551px]'>
                    <h1 className='text-[50px] font-bold  mt-[102px]'>Get a diagnosis at the <span className='text-[#5AB32F]'>Medicare</span> Hospital</h1>
                    <p className='text-xs font-medium text-[#626C7A] mt-6'>At Medicare, we are dedicated to providing exceptional care and improving the health and well-being of our community. Our state-of-the-art facilities, compassionate staff, and commitment to medical excellence.</p>
                    <button className='bg-[#0057B8] py-5 px-6 text-base font-medium text-white rounded-lg mt-[31px]'>Make an appointment</button>
                    <div className='flex gap-[46px] mt-[59px] mb-[67px] bg-[#FFFFFF] shadow px-[31px] py-[21px] rounded-lg'>
                        <div className='flex items-center gap-[10px]'>
                            <LiaBabyCarriageSolid className='w-10 h-10 text-[#0057B8]' />
                            <div>
                                <h3 className='text-2xl font-medium'>2.5k+</h3>
                                <p className='text-[10px]'>At Medicare</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-[10px]'>
                            <RiHospitalLine className='w-10 h-10 text-[#0057B8]' />
                            <div>
                                <h3 className='text-2xl font-medium'>6</h3>
                                <p className='text-[10px]'>At Medicare</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-[10px]'>
                            <LuStethoscope className='w-10 h-10 text-[#0057B8]' />
                            <div>
                                <h3 className='text-2xl font-medium'>45k+</h3>
                                <p className='text-[9px]'>At Medicare</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='absolute mt-[242px] mb-[124px] ml-[190px] shadow-lg bg-[#D5F9C4] blur-3xl'>
                        <Image className='w-[437px] h-[271px]' src={Ellipse} alt='Loading...' />
                    </div>
                    <div className='relative  ml-[97px]'>
                        <Image className='mt-[49px]' src={nurse} alt='Loading...' />
                    </div>
                </div>
            </div>

        </div>
        // </div>
    );
};

export default Banner;