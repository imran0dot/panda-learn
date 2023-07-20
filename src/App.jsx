import './App.css'
import Header from './shared/Header/Header'
import Footer from './shared/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
   <>
    <Header />
      <Outlet />
    <Footer />
   </>
  )
}

export default App
