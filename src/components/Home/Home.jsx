import React from 'react';
import "./Home.scss";
import { FaChevronCircleRight } from "react-icons/fa";
import home from "../../assets/home.png";
import badgePercent from "../../assets/badge-percent.png";

const Home = () => {
    return (
        <section className="home-section flex j-center a-center gap" id="home">
            <div className="content flex column gap-2">
                <div className="subtitle">
                    <h3 className="flex a-center gap-1 blue">
                        <span>
                            <img src={badgePercent} alt="badgepercent" />
                        </span>{" "}
                        Investment made easy
                    </h3>
                </div>
                <div className="title">
                    <h1>The Easiest Way to Track Multiple Currencies.</h1>
                </div>
                <div className="description">
                    <p className="subdue">
                        Market Watchman allow you tu monitor your balances, trade without,
                        limits and earn rewards for specific coins.
                    </p>
                </div>
                <div className="buttons flex gap-1">
                    <button className="btn flex gap-1">
                        Try Now
                        <FaChevronCircleRight />
                    </button>
                    <button className="btn btn-1">How it works?</button>
                </div>
            </div>
            <div className="image">
                <img src={home} alt="home" className="half-width" />
            </div>
        </section>
    )
};

export default Home;