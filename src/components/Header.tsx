import homeSVg from "../assets/home.svg"
import circle1 from "../assets/circle1.svg"
import circle2 from "../assets/circle2.svg"

const Header = () => {
  return (
    <section className="relative">
        <div className="container relative">
            <p className="mt-20 text-center w-full md:max-w-2xl md:mr-36 ml-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aliquid animi exercitationem, maxime excepturi eligendi facilis cum odit quasi cupiditate, id adipisci</p>
            <p className="block text-left mt-40 italic">" Excepteur sint occaecat cupidatat non proident "</p>
            <img src={homeSVg} className="w-96 mt-10"/>
            <img className="circle1" src={circle1}/>
            <img className="circle2" src={circle2}/>
        </div>
    </section>
  )
}

export default Header