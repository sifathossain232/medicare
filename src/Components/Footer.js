import Image from "next/image";
import FooterLogo from '@/assets/logo.png';
import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-[1440px] mx-auto bg-[#161616]">
            <div className="flex justify-end gap-[221px] px-[60px] pt-[76px]">
                <div className="w-[392px]">
                    <div className="flex items-center gap-[10px]">
                        <Image src={FooterLogo} alt="Loading..." />
                        <h1 className="text-3xl font-semibold text-[#0057B8]">Medi<span className="text-[#5AB32F]">care</span></h1>
                    </div>
                    <p className="text-xs mt-[14px] text-white">At Medicare, we are dedicated to providing exceptional care and improving the health and well-being of our community. Our state-of-the-art facilities, compassionate staff.</p>
                </div>
                <div className="flex gap-[120px] text-white">
                    <div>
                        <h1 className="text-base font-medium mb-[18px]">Product</h1>
                        <p className="text-xs font-medium mb-[5px]">Our Team</p>
                        <p className="text-xs font-medium mb-[5px]">Carrers</p>
                        <p className="text-xs font-medium mb-[5px]">Hors</p>
                        <p className="text-xs font-medium">Story</p>
                    </div>
                    <div className="w-[87px]">
                        <h1 className="text-base font-medium mb-[18px]">About from</h1>
                        <p className="text-xs font-medium mb-[5px]">Our Team</p>
                        <p className="text-xs font-medium mb-[5px]">Carrers</p>
                        <p className="text-xs font-medium mb-[5px]">Hors</p>
                        <p className="text-xs font-medium">Story</p>
                    </div>
                    <div className="">
                        <p className="text-xs font-medium mb-[18px]">Sign Up for Our Newslatter</p>
                        <p className="text-xs text-[#B9B9B9] w-[319px] mb-[10px]">At Medicare, we are dedicated to providing exceptional care and improving the health and.</p>
                        <div className="mb-[21px] flex items-center">
                            <input className="w-[201px] h-[45px] outline-none bg-white pl-[15px] rounded-l-[10px]" type="text" name="" id="" placeholder="Your email" />
                            <button className="w-[94px] h-[45px] bg-[#0057B8] text-[14px] font-medium rounded-r-[10px]">Subscribe</button>
                        </div>
                        <div className="flex gap-4 mb-[19px]">
                            <FaFacebookF className="w-5 h-5" />
                            <FaTwitter className="w-5 h-5" />
                            <FaLinkedin className="w-5 h-5" />
                            <FaYoutube className="w-5 h-5" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-b-2 border-[#D9D9D980]"></div>
            <div>
                <p className="text-xs text-white font-medium mt-[15px] ml-[60px] pb-[30px]">Terms and condition</p>
            </div>
        </div>
    );
};

export default Footer;