
export const Navbar = () => {
  return (
    <div className='flex justify-between '>
        <h1 className='font-bold text-3xl'>Light</h1>
        <ul className='flex gap-x-5 font-semibold text-white '>
            <a href='/pricing' className='hover:text-slate-500 duration-300 transition-colors'>pricing</a>
            <a href='/contact'  className='hover:text-slate-500 duration-300 transition-colors'>contact</a>
            <a href='/FAQs' className='hover:text-slate-500 duration-300 transition-colors'>FAQs</a>
            <a href='about us' className='hover:text-slate-500 duration-300 transition-colors'>about us</a>
        </ul>
    </div>
  )
}
