import React from 'react';
import "./DailyPrices.scss";
import price1 from "../../assets/price1.png";
import price2 from "../../assets/price2.png";
import price3 from "../../assets/price3.png";
import price4 from "../../assets/price4.png";
import bitcoin from "../../assets/bitcoin.png";
import ethereum from "../../assets/ethereum.png";
import ggcoin from "../../assets/ggcoin.png";

const DailyPrices = () => {
    const data = [
        {
            name: "Bitcoin",
            image: bitcoin,
            short: "BTC",
            price: "$33,592.99",
            change: "+4.3%",
            marketCap: "$635.14B",
            chart: price1,
        },
        {
            name: "Ethereum",
            image: ethereum,
            short: "ETH",
            price: "$2,273.19",
            change: "+2.1%",
            marketCap: "$267.12B",
            chart: price2,
        },
        {
            name: "GGCoin",
            image: ggcoin,
            short: "GGC",
            price: "$349.47",
            change: "-7.9%",
            marketCap: "$57.16B",
            chart: price3,
        },
        {
            name: "Bitcoin",
            image: bitcoin,
            short: "BTC",
            price: "$0.9434",
            change: "0.0%",
            marketCap: "$27.12B",
            chart: price4,
        },
    ];

    const getPriceChangeClassName = (change) => {
        const changeNum = change[0];
        if (changeNum === "+") return "green";
        else if (changeNum === "-") return "red";
        else return;
    };

    return (
        <section className="price-section flex gap-2 column" id="Dashboard">
            <div className="container">
                <div className="header subdue">
                    <span>#</span>
                    <span>Name</span>
                    <span>Price</span>
                    <span>Change</span>
                    <span>Market Cap</span>
                    <span>Chart</span>
                </div>
                <div className="data flex column gap-1">
                    {data.map(
                        (
                            { name, image, short, price, change, marketCap, chart },
                            index
                        ) => {
                            return (
                                <div className="row a-center" key={price}>
                                    <span>{index + 1}</span>
                                    <div className="name flex gap-1 a-center">
                                        <span className="image">
                                            <img src={image} alt="name" />
                                        </span>
                                        <span>{name}</span>
                                        <span className="short subdue">{short}</span>
                                    </div>
                                    <span>{price}</span>
                                    <span className={getPriceChangeClassName(change)}>
                                        {change}
                                    </span>
                                    <span>{marketCap}</span>
                                    <span className="chart">
                                        <img src={chart} alt="chart" />
                                    </span>
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
        </section>
    )
};

export default DailyPrices;