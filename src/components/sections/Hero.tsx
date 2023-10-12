import "../../styles/hero.css";

const Hero = () => {
    return (
        <section id="hero">
            <img alt="Mountain" src="./Mountain.png" id="mountain" />
            <img alt="Trees" src="./Trees.png" id="trees" />
            <div>
                <p className="heading">
                    Let us&nbsp;
                    <span>save</span>&nbsp;the Earth
                </p>
                <p className="sub-heading">One tree at a time</p>
            </div>
        </section>
    );
};

export default Hero;
