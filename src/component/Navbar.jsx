import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Navbar({ props }) {
    const [isNavbarSticky, setIsNavbarSticky] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
            setIsNavbarSticky(true);
        } else {
            setIsNavbarSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navbarStyle = {
        position: isNavbarSticky ? "fixed" : "relative",
        top: isNavbarSticky ? "0" : "auto",
        width: "100%",
        backgroundColor: isNavbarSticky ? "#607274" : "transparent", // Adjust styles as needed
        boxShadow: isNavbarSticky ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none", // Adjust styles as needed
    };

    return (
        <nav style={navbarStyle}>
            <div className="max-w-screen-3xl mx-auto py-4 px-8 flex justify-between items-center">
                <div>
                    <p className="font-pacifico text-2xl text-font-secondary">
                        Dea Youlanda
                    </p>
                </div>
                <div>
                    <ul className="flex gap-4 font-montserrat text-md text-font-secondary">
                        <Link to="home" activeClass="active" spy={true} smooth={true} duration={500} offset={-100}>
                            <button className="hover:text-font-tertiary">
                                Home
                            </button>
                        
                        </Link>
                        <Link to="about" activeClass="active" spy={true} smooth={true} duration={500} offset={-100}>
                            <button className="hover:text-font-tertiary">
                                About
                            </button>
                        </Link>
                        <Link to="experience" activeClass="active" spy={true} smooth={true} duration={500} offset={-100}>
                            <button className="hover:text-font-tertiary">
                                Experience
                            </button>
                        </Link>
                        <Link to="achievement" activeClass="active" spy={true} smooth={true} duration={500} offset={-100}>
                            <button className="hover:text-font-tertiary">
                                Skill & Achievements
                            </button>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
