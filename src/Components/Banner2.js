import Image from 'next/image';
import Rectangle from '@/assets/Rectangle.png';

const Banner2 = () => {
    return (
        <div className='w-[1440px] mx-auto'>
            <div className='bg-[#5AB32F33] flex gap-[60px] justify-center items-center'>
                <Image className='py-[76px]' src={Rectangle} alt='Loading...'/>
                <div className='w-[551px]'>
                    <h1 className='text-[40px] font-semibold mb-[17px]'>Health consultation for a good life</h1>
                    <p className='text-xs font-medium text-[#626C7A] mb-[38px]'>At Medicare, we are dedicated to providing exceptional care and improving the health and well-being of our community. Our state-of-the-art facilities, compassionate staff, and commitment to medical excellence. At Medicare, we are dedicated to providing exceptional care and improving the health and well-being of our community. Our state-of-the-art facilities, compassionate staff, and commitment to.</p>
                    <button className='text-base font-medium text-white bg-[#0057B8] py-3 px-[22px] rounded-lg'>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner2;