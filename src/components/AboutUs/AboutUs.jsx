import React from 'react';
import "./AboutUs.scss";
import { FaChevronCircleRight } from 'react-icons/fa';
import about from "../../assets/about.png";

const AboutUs = () => {
    return (
        <section className="about-section flex a-center gap">
            <div className="content flex column gap">
                <div className="title-container flex column j-center a-center gap-1">
                    <div className="subtitle subdue">
                        <h2>About Us</h2>
                    </div>
                    <div className="title">
                        <h2>Why would You Choose Market Watchmen?</h2>
                    </div>
                </div>
                <div className="flex gap">
                    <div className="info flex column gap a-start j-center">
                        <p className="subdue">Easy To Learn Platform</p>
                        <p className="subdue">
                            We won’t ask you to link to your bank accounts, we just want
                            everyone to have the opportunity to understand the potential of
                            saving and investing for retirement or short term goals. We simply
                            do data analytics and simplify the way you look at investment
                            assets.
                        </p>
                        <button className="about-button btn">
                            Start Earning <FaChevronCircleRight />
                        </button>
                    </div>
                    <div className="image">
                        <img src={about} alt="about" className="half-width" />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default AboutUs;