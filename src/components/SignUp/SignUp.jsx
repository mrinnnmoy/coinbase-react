import React from 'react';
import "./SignUp.scss";
import card from "../../assets/card.png";

const SignUp = () => {

    return (
        <section className="signup-section flex gap j-between">
            <div className="content text-center">
                <h2>Sign up without any bank account linking and card</h2>
            </div>
            <div className="image">
                <img src={card} alt="card" />
            </div>
        </section>
    )
};

export default SignUp;