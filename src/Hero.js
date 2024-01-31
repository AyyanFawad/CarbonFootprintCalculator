import cf from './assets/cf.png';
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {

    // const handleClick = () => {
    //     console.log("welcome to cfc")
    // }

    return (
        <div className="hero-container">
            <div className="hero-image-container">
                <img src={cf} alt="cf" className="cf-image" />
            </div>
            <div className="text-beside-image">
                <div className="whats-ur-cfc">WHAT'S YOUR <br></br>CARBON <br></br>FOOTPRINT?</div>
                {/* <button onClick={handleClick} className="reveal-button"> Reveal Your Impact</button> */}
                <Link to="/question">
                    <button className="reveal-button">Reveal Your Impact</button>
                </Link>
            </div>
        </div>
    );
}

export default Hero;
