
import React, { useState } from 'react';
import './index.css';
import spinImage from './assets/spin.png'; // Ensure you have spin.png in your src folder

function QuestionScreen() {
  const [spinSpeed, setSpinSpeed] = useState('0s');

  const handleCommuteTime = (time) => {
    // The spin duration is inversely proportional to the commute time
    const speeds = {
      'less': '10s',
      '10-20': '8s',
      '20-30': '6s',
      '30-45': '4s',
      'more': '2s'
    };
    setSpinSpeed(speeds[time]);
  };

  return (
    <div className="QuestionScreen">
      <header className="Screen-header">
        <div className="animation-box">
        <img src={spinImage} alt="spinning" style={{ 
            animation: `spin ${spinSpeed} linear infinite` 
          }}/>
        </div>
        <div className="commute-question">
          <h1>How long was your <br></br> commute Today?</h1>
          <button onClick={() => handleCommuteTime('less')}>Less than 10 minutes</button>
          <button onClick={() => handleCommuteTime('10-20')}>10-20 mins</button>
          <button onClick={() => handleCommuteTime('20-30')}>20-30 mins</button>
          <button onClick={() => handleCommuteTime('30-45')}>30-45 mins</button>
          <button onClick={() => handleCommuteTime('more')}>More than 45 mins</button>
        </div>
      </header>
    </div>
  );
}

export default QuestionScreen;
