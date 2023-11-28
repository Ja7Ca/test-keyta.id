import About from "../components/About"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Pricing from "../components/Pricing"


const Home = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home