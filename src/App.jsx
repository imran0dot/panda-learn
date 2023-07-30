import './App.css'
import Header from './shared/Header/Header'
import Footer from './shared/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
   <>
    <Header />
      <Outlet />
    <Footer />
   </>
  )
}

export default App
