export interface NavLinkProps {
    text: string;
    link: string;
}

/**
 * Renders a navigation link with the provided text and link.
 *
 * @param {NavLinkProps} text - The text to be displayed as the link text.
 * @param {NavLinkProps} link - The URL to navigate to when the link is clicked.
 * @return {JSX.Element} The rendered navigation link component.
 */
export function NavLink({ text, link }: NavLinkProps): JSX.Element {
    return (
        <li className="nav-link">
            <a href={link}>{text}</a>
        </li>
    );
}
