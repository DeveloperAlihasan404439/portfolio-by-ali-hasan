import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Navber from "../Navber/Navber";
import Project from "../Project/Project";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";

function Home() {
    return (
        <>
            <Navber/>
            <Banner/>
            <About/>
            <Services/>
            <Skills/>
            <Project/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default Home;