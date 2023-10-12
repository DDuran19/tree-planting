export const SimpleArticle = ({
    title,
    description,
}: {
    title: string;
    description: string;
}): JSX.Element => {
    return (
        <>
            <article data-article={title}>
                <h3>{title}</h3>
                <p>{description}</p>
            </article>
        </>
    );
};
export default SimpleArticle;
