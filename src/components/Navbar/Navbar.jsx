import React, { useState } from 'react';
import "./Navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
    const links = ["Home", "Dashboard", "About", "Services", "Roadmap" ];
    const [isNavOpen, setIsNavOpen] = useState(false);
    const html = document.querySelector("html");
    html.addEventListener("click", (e) => setIsNavOpen(false));

    return (
        <nav state={isNavOpen ? 1 : 0} className="j-between a-center" id="navbar">
            <div className="brand">
                <h2>Coinbase</h2>
            </div>
            <div className="toggle">
                {isNavOpen ? (
                    <MdClose onClick={() => setIsNavOpen(false)} />
                ) : (
                    <GiHamburgerMenu onClick={(e) => {
                        e.stopPropagation();
                        setIsNavOpen(true);
                    }} />
                )}
            </div>
            <div className={`links ${isNavOpen ? "show" : ""}`}>
                <ul className="flex gap-2">
                    {links.map((link) => {
                        return (
                            <li key={link}>
                                <a href={link}>{link}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="auth flex gap-1">
                <button className="btn btn-1">Sign In</button>
                <button className="btn">Sign Up</button>
            </div>
        </nav>
    )
};

export default Navbar;