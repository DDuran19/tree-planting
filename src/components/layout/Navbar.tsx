import Navlinks from "../compund/Navlinks";
import { Branding } from "../primitive/Branding";
const Navbar = () => {
    return (
        <header>
            <div>
                <Branding />
                <Navlinks />
            </div>
        </header>
    );
};

export default Navbar;
