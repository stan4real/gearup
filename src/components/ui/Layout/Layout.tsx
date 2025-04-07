import Header from './header/Header'
import Footer from './footer/Footer'
import { Outlet } from 'react-router'


const Layout = () => {
  return (
    <main>
      <Header/>
        <Outlet/>
      <Footer/>
    </main>
  )
}

export default Layout