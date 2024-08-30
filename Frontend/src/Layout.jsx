
import Topbar from './Components/Topbar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'

import { ToastContainer } from 'react-toastify'
import Chatbot from './Components/Chatbot'

function Layout() {
 
  return (
    <>
      <ToastContainer/>
  
      <Topbar />
      <Outlet />
     

      <Footer />
      <Chatbot/>
    </>
  )
}

export default Layout
