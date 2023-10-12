import "../../styles/hero.css";

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <article>
                <p className="heading">
                    Let us&nbsp;
                    <span>save</span>&nbsp;the Earth
                </p>
                <p className="sub-heading">One tree at a time</p>
            </article>
            <img alt="Tree landscape" src="./tree-landscape.png" />
        </section>
    );
};

export default Hero;
