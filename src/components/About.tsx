import aboutImg from "../assets/about.svg"
import CardAbout from "./Card/CardAbout"

const About = () => {
  return (
    <section className="py-20" id="about">
        <div className="container">
            <h1 className="text-4xl text-center font-bold">ABOUT OUR APP</h1>
            <p className="mt-4 text-gray-500 w-full md:max-w-xl text-center mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
            <div className="mt-14 flex items-center justify-center gap-20 flex-col md:flex-row">
                <img src={aboutImg} className="w-96"/>
                <div className="grid grid-cols-1 gap-10">
                    <CardAbout title={"Creative Design"} subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit."}/>
                    <CardAbout title={"Easy to use"} subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit."}/>
                    <CardAbout title={"Best user experince"} subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit."}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About