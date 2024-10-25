import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Main = () => {
  return (
    <div className=' w-full min-h-screen'>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Main