import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import AuthFooter from '../AuthFooter/AuthFooter'

const Layout = () => {

    const {pathname} = useLocation()

  return (
    <>
    {
        pathname == '/signin' || pathname == "/signup" ? <></> : <Header></Header>
    }

    <Outlet></Outlet>

    {
        pathname == '/signin' || pathname == "/signup" ? <AuthFooter></AuthFooter> : <Footer></Footer>
    }
    </>
  )
}

export default Layout