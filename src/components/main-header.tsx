
export const MainHeader = () => {
    const clickMe = () => {
        alert("This site isnt suppose to have any functionalities")
    }

  return (
    <div className='flex justify-center items-center'>
        <div className='py-[10%] flex-col space-y-2'>
            <h1 className='text-7xl font-bold  lg:text-9xl'>Header</h1>
            <button onClick={clickMe} className='flex ml-auto text-[#fc90b0c] lg:text-3xl  
            bg-[#fc9b0c] rounded-lg font-semibold px-2 py-1 lg:text-xl lg:px-3 lg:py-2 hover:bg-slate-300 duration-700 transition-colors
            border-2 border-b-4 border-[#341604] '>Learn more</button>
        </div>
   </div>
  )
}
// primary #fc9b0c
// /secondary #1c1c1c