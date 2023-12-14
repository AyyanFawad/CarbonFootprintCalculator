import React, { useState } from 'react';
import './index.css';
import spinImage from './assets/spin.png'; // Ensure you have the correct path

const questions = [
  {
    text: 'How long was your commute Today?',
    options: [
      'Less than 10 minutes',
      '10-20 mins',
      '20-30 mins',
      '30-45 mins',
      'More than 45 mins',
    ],
    image: require('./assets/cf.png'), // Replace with the correct path for your image
    imageFact: "This picture is about a carbon footprint. They are very difficult to calculate and coding their applications frontend is even more annoying.",
  },
  {
    text: 'What is your name?',
    options: ['Ayyan', 'Shafay', 'Ayesha', 'Hafsa', 'random'],
    image: require('./assets/e5.png'), // Replace with the correct path for your image
    imageFact: "Wow thats a cool name",
  },
  // Add more questions as needed
];

function QuestionScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = (answer) => {
    // Handle the response for the current question here
    console.log(`Answer for question ${currentQuestion + 1}: ${answer}`);

    // Move to the next question
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null); // Reset selected option for the new question
    }
  };

  return (
    <div className="QuestionScreen">
      <header className="Screen-header">
        <div className="image-container">
          <img
            src={questions[currentQuestion].image}
            alt={`question ${currentQuestion + 1}`}
            className="question-image"
          />
          <div className="image-fact">
            {questions[currentQuestion].imageFact}
          </div>
        </div>
        <div className="commute-question">
          <h1>{questions[currentQuestion].text}</h1>
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedOption(option)}
              className={selectedOption === option ? 'selected' : ''}
            >
              {option}
            </button>
          ))}
        </div>
      </header>
      <div className="navigation-buttons">
        <button
          onClick={() =>
            setCurrentQuestion((prevQuestion) =>
              Math.max(prevQuestion - 1, 0)
            )
          }
          disabled={currentQuestion === 0}
        >
          Previous
        </button>
        <button
          onClick={() =>
            setCurrentQuestion((prevQuestion) =>
              Math.min(prevQuestion + 1, questions.length - 1)
            )
          }
          disabled={currentQuestion === questions.length - 1}
        >
          Next
        </button>
        <button
          onClick={() => handleAnswer(selectedOption)}
          disabled={selectedOption === null}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default QuestionScreen;
