import React from 'react';
import './index.css'; // Make sure the path to your CSS file is correct
import facebook from './assets/Vector.svg'; // Update the path to your image
import twitter from './assets/twVector.svg'; // Update the path to your image
import linkedin from './assets/lnkVector.svg'; // Update the path to your image



const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#carbon-footprint">Carbon Footprint Calculator</a></li>
            <li><a href="#competitions">Upcoming Competitions</a></li>
            <li><a href="#carbon-info">What is a Carbon Footprint?</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#glossary">Glossary</a></li>
            <li><a href="#updates">Latest Updates</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Get In Touch</h4>
          <ul>
            <li>Mankato, Karachi 75290</li>
            <li><a href="mailto:cfc@HBL.com">cfc@HBL.com</a></li>
            <li>868 264 9654</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className='copyright-text'>Copyright © 2023 HBL. All rights reserved.</p>
        <div className="social-icons">
          <a href="www.facebook.com"><img src={facebook} alt="facebook" className="Vector.svg" /></a>

          <a href="www.twitter.com"><img src={twitter} alt="twitter" className="twVector.svg" /></a>
          <a href="www.linkedin.com"><img src={linkedin} alt="linkedin" className="lnkVector.svg" /></a>
        </div>
      </div>
    </footer>
  );
}


export default Footer;
