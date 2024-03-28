import About from "../About/About";
import Banner from "../Banner/Banner";
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
        </>
    );
}

export default Home;