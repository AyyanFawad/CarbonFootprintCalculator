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
          <h2 className="carbon-footprint-title">What is a Carbon Footprint?</h2>
          <p className="carbon-footprint-description">
            {`A carbon footprint is a measurement of the amount of greenhouse gases, mainly Carbon Dioxide (CO2), that is emitted to the atmosphere.
             They are directly or indirectly produced by individuals or organizations. Energy consumption, transportation and manufacturing processes are 
             some of the main contributors to the release of greenhouse gases such as CO2 in the atmosphere. Excess greenhouse gas emissions are harmful as they
             contribute to climate change and global warming by trapping heat in the atmosphere. Overall, they are very harmful for the environment and we as individuals
             must play our part in reducing our emissions for the betterment of the planet.`}
          </p>
          <button className="learn-more-button">Learn More</button>
        </div>
      </div>


      <section className="section-with-rectangles">
        <div className="large-rectangle"></div>
        <div className="small-rectangle">
          <div className="label">
            {/* <div className="text-wrapper">Self Check</div> */}
            <div className="reveal-your-IMPACT">Reveal your impact!</div>
            <p className="calculator-description">
              {'We have designed a Carbon Footprint Calculator that will present you with a series of questions that will help you estimate your individual carbon footprint. Please ensure to read the glossary below to familiarize youserself with terminology used throughout the calculation process. Follow through and use the calculator regularly to compete with your colleagues and to earn exciting rewards!'}
            </p>
          </div>
        </div>
        <div className="white-box">
          <div className="label">
            <div className="text-wrapper">Calculate how you are affecting the <br></br>environment</div>
            <p className="environment-description">
              {'Begin your journey towards reducing your carbon footprint now! Input details of your daily routine and let the calculator do the rest. See how much you are impacting the environment with an accurate estimation of your carbon footprint and take your first step towards making a positive change. Use the calculator to unveil the power of your choices and receive personalized tips to further your knowledge of greenhouse gases and their impact on the environment. Be sure to play your part in helping the planet and ensuring a greener, more sustainable future!'}
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
              Carbon Footprint: Amount of greenhouse gases, mainly Carbon Dioxide, emitted into the atmosphere.
              <br></br><br></br>
              CO2: Carbon Dioxide. The main greenhouse gas of which we will be calculating the emission using the calculator.
              <br></br><br></br>
              Type 1: Direct emissions from owned activities, like burning fuel.
              <br></br><br></br>
              Type 2: Indirect emissions from purchased energy, such as electricity.
              <br></br><br></br>
              Type 3: Value chain emissions, encompassing supply chain and product lifecycle impacts.
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
