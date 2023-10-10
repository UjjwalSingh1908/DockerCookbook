import React from "react";
import "../../tailwind.css";
import classes from "./Hero.module.css";

function Hero() {
    return (
        <div className={classes.Hero}>
            <div className="font-sans py-6 px-12 h-full flex content-between justify-between md:justify-around flex-row md:flex-col">
                <div className="self-center md:text-center p-4">
                    <h1>Eat Healthy</h1>
                    <h2>Live Well</h2>
                </div>
                <div className="self-center md:text-justify max-w-xl p-4">
                    <p className="text-xl">
                    Maintaining a healthy diet is essential for everyone, especially teenagers. It leads to fitness, purity, and prevention of health issues. Embrace it, and your body will thank you. <br/>
                    Greetings and welcome to our recipe app, crafted by the culinary talents of <b> Sanika, Ujjwal, Jay, Pranav, and Gaurav </b>. We're thrilled to introduce you to our world of delectable recipes, and we invite you to embark on this flavorful journey with us!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
