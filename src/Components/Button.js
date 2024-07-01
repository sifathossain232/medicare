"use client"
import { useRouter } from 'next/router';
import { GoPlay } from "react-icons/go";


const Button = ({ videoUrl }) => {
    // const router = useRouter();

    const handleClick = () => {
        // window.location.href = videoUrl;
        window.open(videoUrl, '_blank');
    };

    return (
        <button onClick={handleClick} className="flex items-center gap-[13px] mt-[26px]">
            <GoPlay className='text-[#0057B8] w-[50px] h-[50px]' /> Watch Video
        </button>
    );
};

export default Button;