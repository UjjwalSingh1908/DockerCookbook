import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHeart, faCode } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <div className="bg-background-tertiary text-copy-primary flex flex-row sm:flex-col sm:text-center sm:justify-around justify-between bg-gray-800 h-32">
        
            <div className="container flex flex-col justify-center mr-12 sm:text-center text-right text-gray-500 text-lg">
                <p className="text-sm sm:text-s text-white mb-1">
                    <FontAwesomeIcon icon={faCode} size="1x" /> by{" "}
                    <a href="https://twitter.com/heytulsiprasad">
                        Ujjwal Singh, Pranav Kale, Jay Kamble, Sanika Utpat & Gaurav Bade
                    </a>
                </p>
                <p className="text-md sm:text-sm">
                    Common Module Batch-4
                </p>
            </div>
        </div>
    );
}

export default Footer;
