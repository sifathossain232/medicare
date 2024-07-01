import Image from "next/image";
import TechnologyImg from "@/assets/Technology.png";
import Button from "./Button";
const Technology = () => {
    return (
        <div className="w-[1079px] mx-auto flex items-center gap-[75px] my-20">
            <div>
                <h1 className="text-[44px] font-semibold mb-2">Future Medical <span className="text-[#5AB32F]">Technology</span></h1>
                <p className="text-base text-[#626C7A] font-medium">At Medicare, we are dedicated to providing exceptional care and improving the health and well-being of our community. Our state-of-the-art facilities.</p>
                <Button videoUrl="https://www.youtube.com/watch?v=kK99NlPe0-0" />
            </div>
            <Image src={TechnologyImg} alt='Loading...' />
        </div>
    );
};

export default Technology;