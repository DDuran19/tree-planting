import About from "../components/sections/About";
import Hero from "../components/sections/Hero";
import PricingCards from "../components/sections/PricingCards";
import "../styles/landing-page.css";

export const LandingPage = () => {
    return (
        <div className="landing-page">
            <Hero />
            <About />
            <PricingCards />
        </div>
    );
};

export default LandingPage;
