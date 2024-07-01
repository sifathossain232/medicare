import Image from 'next/image';

const Modal = ({ item, close }) => {
    const { id, title, description, image } = item

    return (
        <div className='relative'>
            <div className="bg-white py-[42px] px-[57px] flex flex-col items-center w-[423px] h-[357px] shadow rounded-xl">
                <Image className="my-10" src={image} width={68} height={68} alt='Loading...' />
                <p className="text-xl font-medium mb-[5px]">{title}</p>
                <p className="text-xs font-medium text-[#626C7A] text-justify">{description}</p>
            </div>
                <div className={`${close ? "duration-1000 delay-1000 transition" : ""} absolute top-0 left-0 border-b border-r rounded-br-lg px-5`}>
                    <button onClick={close} className="text-2xl font-bold">x</button>
                </div>
        </div>
    );
};

export default Modal;