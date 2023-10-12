import About from "../components/sections/About";
import Hero from "../components/sections/Hero";
import "../styles/landing-page.css";

export const LandingPage = () => {
    return (
        <div className="landing-page">
            <Hero />
            <About />
        </div>
    );
};

export default LandingPage;
