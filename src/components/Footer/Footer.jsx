import React from 'react';
import "./Footer.scss";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import spacemen from "../../assets/spacemen.png";
import cards from "../../assets/cards.png";

const Footer = () => {
    const companyLinks = [
        "Home",
        "About",
        "Careers",
        "Blog",
        "Legal & Privacy",
    ];
    const LearnLinks = [
        "Market Updates",
        "How to send crypto",
        "Browse crypto prices",
        "Coinbase Bytes newsletter",
        "How to set up a crypto waller",
    ];
    const socialIcons = [<BsFacebook />, <BsTwitter />, <BsLinkedin />];

    return (
        <footer className="footer-section flex column gap">
            <div className="upper-footer">
                <div className=" flex column gap-1">
                    <div className="brand">
                        <h2>Coinbase</h2>
                    </div>
                    <div className="address">
                        <p>GymVast, 18 East 50th Street, 4th Floor, New York, NY 10022</p>
                    </div>
                    <div className="social-icons flex gap-2">
                        {socialIcons.map((icon, index) => {
                            return (
                                <div className="icon" key={index}>
                                    {icon}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className=" flex column gap-1">
                    <div className="title">
                        <h3>Company</h3>
                    </div>
                    <ul className="flex column gap-half">
                        {companyLinks.map((link) => {
                            return <li key={link}>{link}</li>;
                        })}
                    </ul>
                </div>
                <div className=" flex column gap-1">
                    <div className="title">
                        <h3>Learn</h3>
                    </div>
                    <ul className="flex column gap-half">
                        {LearnLinks.map((link) => {
                            return <li key={link}>{link}</li>;
                        })}
                    </ul>
                </div>
                <div className=" flex column gap-1">
                    <div className="title">
                        <h3>Company</h3>
                    </div>
                    <ul className="flex column gap-half">
                        {companyLinks.map((link) => {
                            return <li key={link}>{link}</li>;
                        })}
                    </ul>
                </div>
                <div className="col spacemen">
                    <div className="image">
                        <img src={spacemen} alt="spacemen" />
                    </div>
                </div>
            </div>
            <div className="lower-footer flex a-center j-between gap">
                <div className="col1">
                    <span>&copy; All Rights Reserved. Mrinmoy Porel</span>
                </div>
                <div className="col2 flex a-center gap">
                    <span>Privacy Policy</span>
                    <span>Terms & Conditions</span>
                    <span className="cards">
                        <img src={cards} alt="cards" />
                    </span>
                </div>
            </div>
        </footer>
    )
};

export default Footer;