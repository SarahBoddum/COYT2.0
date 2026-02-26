import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// Importér dine billeder
import pynt1 from "../assets/images/pynt1.jpg";
import pynt2 from "../assets/images/pynt2.jpg";
import pynt3 from "../assets/images/pynt3.jpg";
import pynt4 from "../assets/images/pynt4.jpg";
import pynt5 from "../assets/images/pynt5.jpg";
import pynt6 from "../assets/images/pynt6.jpg";
import pynt7 from "../assets/images/pynt7.jpg";
import pynt8 from "../assets/images/pynt8.jpg";
import pynt9 from "../assets/images/pynt9.jpg";
import pynt10 from "../assets/images/pynt10.jpg";

export default function Navigation() {
    const [burgerActive, setBurgerActive] = useState(false);
    const [krydsActive, setKrydsActive] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [currentPynt, setCurrentPynt] = useState(pynt1);

    const pyntImages = [
        pynt1, pynt2, pynt3, pynt4, pynt5, pynt6, pynt7, pynt8, pynt9, pynt10
    ];

    const toggleBurger = () => {
        const newState = !burgerActive;
        setBurgerActive(newState);
        setKrydsActive(!krydsActive);

        if (newState) {
            // Vælg tilfældigt billede, når menu åbnes
            const randomIndex = Math.floor(Math.random() * pyntImages.length);
            setCurrentPynt(pyntImages[randomIndex]);
        }
    };

    const closeAll = () => {
        setBurgerActive(false);
        setKrydsActive(false);
        setActiveDropdown(null);
    };

    const handleDropdownClick = (dropdown) => {
        if (activeDropdown === dropdown) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(dropdown);
        }
    };

    useEffect(() => {
        if (burgerActive) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [burgerActive]);

    return (
        <nav className="navigation">
            <div id="mobilheader">
                <div
                    className={krydsActive ? "close" : null}
                    onClick={toggleBurger}
                    id="burger-menu"
                >
                    <span></span>
                </div>
            </div>

            <div id="menu" className={burgerActive ? "overlay" : null}>
                <div id="xul">
                    <NavLink className="navlink" to="/forretailers" onClick={closeAll}>For Retailers</NavLink>
                    <NavLink className="navlink" to="/about" onClick={closeAll}>About</NavLink>
                    <NavLink className="navlink" to="/archive" onClick={closeAll}>Archive</NavLink>
                    <NavLink className="navlink" to="/frontpage" onClick={closeAll}>Home</NavLink>
                </div>
                <NavLink to="/contact" className="navlink no-underline" id="orderLink" onClick={closeAll}>Contact</NavLink>    
                <img className="mobil" id="pynt" src={currentPynt} alt="COYT logocap billede" />
            </div>
        </nav>
    );
}
