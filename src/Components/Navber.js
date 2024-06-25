"use client"
import logo from '@/assets/logo.png'
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
    return (
        <div className='w-[1440px] m-auto'>
            <div className='flex justify-between items-center mx-[60px] mt-[50px]'>
                <div className='flex gap-[10px]'>
                    <Image src={logo} alt="loding..." />
                    <h1 className='text-3xl font-semibold text-[#0057B8]'>Medi<span className='text-[#5AB32F]'>care</span></h1>
                </div>
                <div className='flex justify-end items-center gap-[161px]'>
                    <div className='flex gap-[30px] text-base'>
                        <Link href="/">Home</Link>
                        <Link href="/">About</Link>
                        <Link href="/">Services</Link>
                        <Link href="/">Departments</Link>
                        <Link href="/">Doctors</Link>
                        <Link href="/">Contact</Link>
                    </div>
                    <button className='bg-[#0057B8] py-[10px] px-[25px] text-white text-base font-medium rounded-lg'>Register</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;