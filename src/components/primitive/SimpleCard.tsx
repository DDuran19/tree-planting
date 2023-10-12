interface simpleCardProps {
    title: string;
    price: number;
    image: string;
    bgColor: string;
}

export const SimpleCard = ({
    title,
    image,
    price,
    bgColor,
}: simpleCardProps): JSX.Element => {
    return (
        <div data-pricing-card style={{ backgroundColor: bgColor }}>
            <h3>{title}</h3>
            <div>
                <img src={image} alt={title} height={70} />
                <h3>$ {price}.00</h3>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                quo, ea provident fuga sed modi aliquid. Magni a excepturi earum
                quidem. Laudantium soluta, blanditiis exercitationem id sint in
                dolorum expedita, velit vel eligendi vero excepturi natus minima
                neque esse ipsam mollitia cum magnam?
            </p>
            <a href="/donate">Donate Now</a>
        </div>
    );
};

export default SimpleCard;
