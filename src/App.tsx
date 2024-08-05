import './App.css'
import { Features } from './components/features'
import { MainHeader } from './components/main-header'
import { Navbar } from './components/navbar'

function App() {

  return (
    <>
      <div className=' bg-[#1c1c1c] w-full min-h-screen'>
        <div className=' w-[80%] mx-auto py-4'>
          <Navbar />

        </div>
        <MainHeader />
        <div className='min-h-[30vh]'>
        <Features />

        </div>

      </div>
    </>
  )
}

export default App
