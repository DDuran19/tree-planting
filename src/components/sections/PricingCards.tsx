import SimpleCard from "../primitive/SimpleCard";
import "../../styles/prices.css";
export const PricingCards = () => {
    return (
        <>
            <section id="prices">
                <SimpleCard
                    title="Sappling"
                    image="/Sappling.svg"
                    price={5.0}
                    bgColor="var(--color-secondary)"
                />
                <SimpleCard
                    title="Seedling"
                    image="/Seedling.svg"
                    price={10.0}
                    bgColor="var(--color-accent)"
                />
                <SimpleCard
                    title="Blossom"
                    image="/Blossom.svg"
                    price={15.0}
                    bgColor="var(--color-light)"
                />
            </section>
        </>
    );
};

export default PricingCards;
