import Image from "next/image";
import OpTheater from '@/assets/Rectangle1.png'
import { TbHeartHandshake } from "react-icons/tb";
import { PiGoogleCardboardLogo } from "react-icons/pi";
import { LiaHospitalAltSolid } from "react-icons/lia";
import { LuCalendarClock } from "react-icons/lu";
import { TbWheelchair } from "react-icons/tb";
import { LuScreenShare } from "react-icons/lu";
import { IoMapOutline } from "react-icons/io5";
import { PiAmbulanceLight } from "react-icons/pi";
import { Ri24HoursFill } from "react-icons/ri";


const OperationTheater = () => {
    return (
        <div className="w-[1096px] h-[634px] mx-auto mt-[115px]">
            <div className='shadow rounded-xl'>
                <div className="w-[703px] mx-auto text-center pt-16">
                    <h1 className="text-[40px] font-semibold mb-[13px]">Our <span className="text-[#5AB32F]">Value</span> To Help You</h1>
                    <p className="text-xs font-medium text-[#626C7A]">At Medicare, we are dedicated to providing exceptional care and improving the health and well-being of our community. Our state-of-the-art facilities, compassionate staff, and commitment to medical.</p>
                </div>
                <div>
                    <div className="px-[73px] flex gap-[78px] items-center pt-[45px] pb-[68px]">
                        <div className="grid grid-cols-3 gap-x-[116px] gap-y-[66px] w-[582px]">
                            <div className="w-[124px] flex flex-col items-center">
                                <TbHeartHandshake className="text-[#0057B8] w-[50px] h-[50px]" />
                                <p className="text-xs font-medium">Primary care</p>
                            </div>
                            <div className="w-[133px] flex flex-col items-center">
                                <PiGoogleCardboardLogo className="text-[#0057B8] w-[50px] h-[50px]" />
                                <p className="text-xs font-medium">24/7 Virtual care</p>
                            </div>
                            <div className="w-[124px] flex flex-col items-center">
                                <LiaHospitalAltSolid className="text-[#0057B8] w-[50px] h-[50px]" />
                                <p className="text-xs font-medium">Emergency care</p>
                            </div>
                            <div className="w-[124px] flex flex-col items-center">
                                <LuCalendarClock className="text-[#0057B8] w-[50px] h-[50px]" />
                                <p className="text-xs font-medium">Request appointment</p>
                            </div>
                            <div className="w-[133px] flex flex-col items-center">
                                <TbWheelchair className="text-[#0057B8] w-[50px] h-[50px]" />
                                <p className="text-xs font-medium">Patient patrol</p>
                            </div>
                            <div className="w-[124px] flex flex-col items-center">
                                <LuScreenShare className="text-[#0057B8] w-[50px] h-[50px]" />
                                <p className="text-xs font-medium">Online services</p>
                            </div>
                            <div className="w-[124px] flex flex-col items-center">
                                <IoMapOutline className="text-[#0057B8] w-[50px] h-[50px]" />
                                <p className="text-xs font-medium">Map and direction</p>
                            </div>
                            <div className="w-[133px] flex flex-col items-center">
                                <PiAmbulanceLight className="text-[#0057B8] w-[50px] h-[50px]" />
                                <p className="text-xs font-medium">Emergency Ambulance</p>
                            </div>
                            <div className="w-[124px] flex flex-col items-center">
                                <Ri24HoursFill className="text-[#0057B8] w-[50px] h-[50px]" />
                                <p className="text-xs font-medium">Contact Us</p>
                            </div>
                        </div>
                        <Image src={OpTheater} width={300} height={332} alt="Loading..." />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OperationTheater;