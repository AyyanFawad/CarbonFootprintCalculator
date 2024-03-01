import React from 'react';
import { Link } from 'react-router-dom';
import CarbonFootprint from "./assets/Carbon-Footprint.jpg"
import CarbonFootprint2 from "./assets/cf.png"
import CarbonFootprint3 from "./assets/green-business-2.jpg"
import CarbonFootprint4 from "./assets/Carbon-Footprint-3.jpg"
import ForestBackground from "./assets/forest-background.jpg"
import './NewMainContent.css'; // Ensure this is imported to apply styles

const NewMainContent = () => {
    return (
        <div className='Main-Content-Container'>
            <div className='section-1'>
                <img alt='carbon footprint literal footprint' src={ForestBackground} className='forest-background' />

                <div className='section-1-text'>
                    <h1>Calculate your carbon footprint</h1>
                    <p>Learn how you affect the environment and what you can do to minimise your impact</p>
                    <Link to="/question">
                        <button className="Calculator-Button">Calculate Your Footprint</button>
                    </Link>
                </div>
            </div>

            <section className='section-2'>
                <div className='section-2-text'>
                    <h1>Less emissions today for a cleaner, healthier tomorrow</h1>
                    <p>You as an individual play a crucial role in safeguarding the Earth's future and biodiversity. Each person's efforts, no matter how small, contribute to building a more sustainable and resilient world for generations to come.</p>
                </div>
                <div className='section-2-image-container'>
                    <img alt='less emissions today' src={CarbonFootprint} className='section-2-image-1' />
                    <img alt='less emissions today' src={CarbonFootprint2} className='section-2-image-2' />
                </div>
            </section>

            <section className='section-3'>
                <div className='section-3-text'>
                    <h1>Calculate your footprint and see how you can play your part</h1>
                    <p>Use our carbon footprint calculator to see how you are affecting the environment and learn how you can minimize your impact. Compete with your friends and earn rewards while helping the planet!</p>
                    <Link to="/question">
                        <button className="Second-Calculator-Button">Calculate Your Footprint</button>
                    </Link>
                </div>
                <div className='section-3-image-container'>
                    <img alt='less emissions today' src={CarbonFootprint3} className='section-3-image-1' />
                    <img alt='less emissions today' src={CarbonFootprint4} className='section-3-image-2' />

                </div>

            </section>


        </div>
    );
}
export default NewMainContent;