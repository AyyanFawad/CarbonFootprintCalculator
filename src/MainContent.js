// MainContent.js
import React from 'react';
import globalFootprintImage from './assets/globalfootprint.png'; // Update the path to your image
import gbImage from './assets/gb.png'; // Update the path to your image
import { Link } from 'react-router-dom';

import './index.css'; // Ensure this is imported to apply styles

const MainContent = () => {
  return (
    <div className="main-content-container">

      <div className="carbon-footprint-section">
        <img src={globalFootprintImage} alt="Global Footprint" className="global-footprint-image" />
        <div className="text-content">
          <h2 className="carbon-footprint-title">What is a <br></br> Carbon Footprint?</h2>
          <p className="carbon-footprint-description">
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. Excepteur`}
          </p>
          <button className="learn-more-button">Learn More</button>
        </div>
      </div>


      <section className="section-with-rectangles">
        <div className="large-rectangle"></div>
        <div className="small-rectangle">
          <div className="label">
            {/* <div className="text-wrapper">Self Check</div> */}
            <div className="reveal-your-IMPACT">Reveal your IMPACT</div>
            <p className="calculator-description">
              {'Explore a range of evidence-based online therapies to support your journey to recovery. These self-help resources empower you to manage PTSD symptoms on your terms.'}
            </p>
          </div>
        </div>
        <div className="white-box">
          <div className="label">
            <div className="text-wrapper">Calculate how you are affecting the <br></br>environment</div>
            <p className="environment-description">
              {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur'}
            </p>
          </div>
        </div>
      </section>

      <section className="glossary-section">
        <div className="text-content">
          <div className="label glossary-label">
            <div className="text-wrapper">Glossary: Some terms for you</div>
            {/* <div className="terms-title">Some Terms for You <br></br>to Learn</div> */}
            <p className="glossary-description">
              {'Evaluate your emotional health with our self-assessment tools. Gain insight and take steps toward healing.'}
            </p>
            <Link to="/hero">
              <button className="begin-now-button">Begin Now</button>
            </Link>
          </div>
        </div>
        <div className="box">
          <img src={gbImage} alt="GB" className="gb-image" />
        </div>
      </section>
    </div>
  );
};

export default MainContent;
