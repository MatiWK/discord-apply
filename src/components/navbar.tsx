import { useState } from "react"

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false)
  const openMenu = () => {
    setOpen((prev) => !prev)
  }

  return (
    <div className='flex justify-between '>
        <h1 className='font-bold text-3xl'>Light</h1>
        <ul className=' gap-x-5 font-semibold text-white hidden md:flex'>
            <a href='/pricing' className='hover:text-slate-500 duration-300 transition-colors'>pricing</a>
            <a href='/contact'  className='hover:text-slate-500 duration-300 transition-colors'>contact</a>
            <a href='/FAQs' className='hover:text-slate-500 duration-300 transition-colors'>FAQs</a>
            <a href='about us' className='hover:text-slate-500 duration-300 transition-colors'>about us</a>
        </ul>
        <div className="flex md:hidden text-white hover:text-slate-500 duration-300 transition-all">
          <button onClick={openMenu}>---</button>
        </div>
        {open &&
         <div className={`fixed top-0 left-0 min-h-screen w-[60%] bg-slate-900 transition-all duration-300`}>
          <div className="absolute top-2 right-2">
            <button onClick={openMenu} className="text-3xl text-white hover:text-slate-300 transition-colors duration-300">x</button>
          </div>
           <ul className='text-white flex-col p-4 text-xl space-y-2'>
            <li>
            <a href='/pricing' className='hover:text-slate-500 duration-300 transition-colors'>pricing</a>

            </li>
            <li>
            <a href='/contact'  className='hover:text-slate-500 duration-300 transition-colors'>contact</a>

            </li>
            <li>
            <a href='/FAQs' className='hover:text-slate-500 duration-300 transition-colors'>FAQs</a>

            </li>
            <li>
            <a href='about us' className='hover:text-slate-500 duration-300 transition-colors'>about us</a>

            </li>
        </ul>
        </div>
        }
    </div>
  )
}
