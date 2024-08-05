import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { XIcon } from 'lucide-react';

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const onOpen = () => {
    setOpen((prev) => !prev);
    const burgerIcon = document.querySelector<HTMLDivElement>('.burger');
    if (!burgerIcon) return false;

    burgerIcon.style.width = "70%";
  };

  const onClose = () => {
    setOpen((prev) => !prev);
    const burgerIcon = document.querySelector<HTMLDivElement>('.burger');
    if (!burgerIcon) return false;

    burgerIcon.style.width = "0px";
  };

  return (
    <div className='flex justify-between p-4'>
      <h1 className=' text-4xl lg:text-7xl text-white font-sacramento font-bold cursor-pointer'>Light</h1>
      <ul className='gap-x-10 font-semibold text-white hidden lg:flex lg:text-xl font-serif'>
        <a href='/' className='hover:text-slate-500 group transition-all duration-300 ease-in-out'>
          <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            pricing
          </span>
        </a>
        <a href='/' className='hover:text-slate-500 group transition-all duration-300 ease-in-out'>
          <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            contact
          </span>
        </a>
        <a href='/' className='hover:text-slate-500 group transition-all duration-300 ease-in-out'>
          <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            FAQs
          </span>
        </a>
        <a href='/' className='hover:text-slate-500 group transition-all duration-300 ease-in-out'>
          <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            about us
          </span>
        </a>
      </ul>
      <div className="flex lg:hidden text-white hover:text-slate-500 duration-300 transition-all">
        <button onClick={open ? onClose : onOpen}><GiHamburgerMenu size={25} /></button>
      </div>
      <div className='w-[0px] burger duration-500 opacity-95 overflow-x-hidden bg-[#222] text-white font-bold min-h-screen flex flex-col space-y-5 fixed top-0 left-0 items-start text-3xl open z-[900]'>
        <button className='absolute top-2 right-2 hover:text-slate-600 duration-500' onClick={onClose}>
          <XIcon size={35} />
        </button >
        <a href="Pricing" className='relative hover:scale-110 mx-10 pt-10 hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'>
          <span className=''>Introduction</span>
        </a>
        <a href="About us" className='relative hover:scale-110 mx-10 hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'>
          <span>Experience</span>
        </a>
        <a href="Features" className='relative hover:scale-110 mx-10 hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'>
          <span>Education</span>
        </a>
        <a href="Contact" className='relative hover:scale-110 mx-10 hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'>
          <span>Contact</span>
        </a>
      </div>
    </div>
  );
}
