import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
