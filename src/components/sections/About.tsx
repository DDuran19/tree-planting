import "../../styles/about.css";
import SimpleArticle from "../primitive/SimpleArticle";

const About = () => {
    return (
        <section id="about">
            <SimpleArticle
                title="Mission"
                description="Our mission is to reforest and restore the natural beauty of our planet, one tree at a time. We are dedicated to planting trees, nurturing their growth, and creating a sustainable future for generations to come."
            />
            <SimpleArticle
                title="Vision"
                description="Our vision is a world where lush forests thrive, providing clean air, habitat for wildlife, and a healthier environment. We aspire to be a global leader in tree planting, fostering a deep connection between people and nature while addressing the pressing issue of deforestation."
            />
        </section>
    );
};

export default About;
