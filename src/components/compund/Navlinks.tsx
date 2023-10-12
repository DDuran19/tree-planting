import React, { ReactElement } from "react";
import { NavLink } from "../primitive/Navlink";

interface NavlinksProps {
    links?: { text: string; link: string }[];
}

/**
 * Renders a list of navigation links.
 *
 * @param {NavlinksProps} links - An array of navigation links.
 * @return {ReactElement} - The rendered navigation links.
 */
const Navlinks: React.FC<NavlinksProps> = ({
    links,
}: NavlinksProps): ReactElement => {
    if (links === undefined) {
        links = [
            { text: "Home", link: "/" },
            { text: "About", link: "/#about" },
            { text: "Login", link: "/#login" },
            { text: "JOIN US", link: "/#prices" },
        ];
    }

    return (
        <ul className="nav-links">
            {links.map((link, index) => (
                <NavLink key={index} text={link.text} link={link.link} />
            ))}
        </ul>
    );
};

export default Navlinks;
