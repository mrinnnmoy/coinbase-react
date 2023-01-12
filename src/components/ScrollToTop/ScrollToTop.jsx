import React, { useState } from 'react';
import "./ScrollToTop.scss";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);
    window.addEventListener("scroll", () => {
        window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
    });

    return (
        <div className="scroll-section">
            <a href="#navbar" className={`${visible ? "block" : "none"}`}>
                <FaChevronUp />
            </a>
        </div>
    )
};

export default ScrollToTop;