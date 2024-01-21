import React, { useState } from 'react';
import './index.css';
// import spinImage from './assets/spin.png';

const questions = [
  {
    type: 'mcq',
    text: 'How long was your commute Today?',
    options: [
      'Less than 10 minutes',
      '10-20 mins',
      '20-30 mins',
      '30-45 mins',
      'More than 45 mins',
    ],
    image: require('./assets/q1.jpg'), // Replace with the correct path for your image
    imageFact: "Transportation is what usually makes up for the largest portion of an individuals carbon footprint.",
  },
  {
    type: 'mcq',
    text: 'What was your mode of transport?',
    options: ['Car', 'Bike', 'Rickshaw', 'Bus', 'Walk'],
    image: require('./assets/q2.jpg'), // Replace with the correct path for your image
    imageFact: "Over short to medium distances, walking or cycling are nearly always the lowest carbon way to travel. The carbon footprint of cycling one kilometer is usually in the range of 16 to 50 grams CO2eq per km",
  },
  {
    type: 'slider',
    text: 'How many people did you share your transport with?',
    min: 0,
    max: 5,
    step: 1,
    image: require('./assets/q3.jpg'),
    imageFact: "Transport accounts for around one-quarter of global carbon dioxide (CO2) emissions from energy.",
  },
  {
    type: 'slider',
    text: 'Approximately how much did you spend on fuel the last time you refilled your vehicle?',
    min: 0,
    max: 25000,
    step: 500,
    image: require('./assets/q4.jpg'),
    imageFact: "Vehicles that use gasoline emit 2.3 kg CO2/L. Vehicles that use diesel emit 2.68 kg CO2/L and vehicles that use CNG use 2.66kg CO2/L.",
  },
  {
    type: 'slider',
    text: 'How many people are in your household including you?',
    min: 1,
    max: 15,
    step: 1,
    image: require('./assets/q5.jpg'),
    imageFact: "Sharing of resources such as transport and living is an extremely efficient way to reduce your carbon emission.",
  },
  {
    type: 'slider',
    text: 'Approximately how much was your electricity bill last month?',
    min: 0,
    max: 100000,
    step: 1000,
    image: require('./assets/q6.jpg'),
    imageFact: "If you don't remember thats okay. Kindly follow the link to get your bill: https://easybill.pk/",
  },
  {
    type: 'slider',
    text: 'Approximately how much was your gas bill last month?',
    min: 0,
    max: 50000,
    step: 1000,
    image: require('./assets/q7.jpg'),
    imageFact: "If you don't remember thats okay. Kindly follow the link to get your bill: https://fescoonlinebillcheck.pk/sui-gas-bill/",
  },
];



// function QuestionScreen() {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);

//   const handleAnswer = (answer) => {
//     try {
//       console.log(`Answer for question ${currentQuestion + 1}: ${answer}`);

//       if (currentQuestion < questions.length - 1) {
//         setCurrentQuestion(currentQuestion + 1);
//         setSelectedOption(null);
//       }
//     } catch (error) {
//       console.error('Error in handleAnswer:', error);
//     }
//   };


//   const renderQuestion = () => {
//     if (currentQuestion >= questions.length) {
//       return (
//         <div className="question-container">
//           <h1>All questions answered. Thank you!</h1>
//         </div>
//       );
//     }

//     const currentQuestionData = questions[currentQuestion];

//     return (
//       <>
//         <div className="image-container">
//           <img
//             src={currentQuestionData.image}
//             alt={`question ${currentQuestion + 1}`}
//             className="question-image"
//           />
//           <div className="image-fact">
//             {currentQuestionData.imageFact}
//           </div>
//         </div>
//         <div className={`question-container ${currentQuestionData.type === 'slider' ? 'slider-question' : 'mcq-question'}`}>
//           <h1>{currentQuestionData.text}</h1>
//           {currentQuestionData.type === 'mcq' &&
//             currentQuestionData.options.map((option, index) => (
//               <button
//                 key={index}
//                 onClick={() => setSelectedOption(option)}
//                 className={selectedOption === option ? 'selected' : ''}
//               >
//                 {option}
//               </button>
//             ))}
//           {currentQuestionData.type === 'slider' && (
//             <>
//               <input
//                 type="range"
//                 min={currentQuestionData.min}
//                 max={currentQuestionData.max}
//                 step={currentQuestionData.step}
//                 value={selectedOption === null ? currentQuestionData.min : selectedOption}
//                 onChange={(e) => setSelectedOption(parseInt(e.target.value))}
//               />
//               <p>{selectedOption === null ? currentQuestionData.min : selectedOption}</p>
//             </>
//           )}
//         </div>
//       </>
//     );
//   };


//   return (
//     <div className="QuestionScreen">
//       <header className="Screen-header">
//         {renderQuestion()}
//       </header>
//       <div className="navigation-buttons">
//         <button
//           onClick={() =>
//             setCurrentQuestion((prevQuestion) =>
//               Math.max(prevQuestion - 1, 0)
//             )
//           }
//           disabled={currentQuestion === 0}
//         >
//           Previous
//         </button>
//         <button
//           onClick={() =>
//             setCurrentQuestion((prevQuestion) =>
//               Math.min(prevQuestion + 1, questions.length - 1)
//             )
//           }
//           disabled={currentQuestion === questions.length - 1}
//         >
//           Next
//         </button>
//         <button
//           onClick={() => handleAnswer(selectedOption)}
//           disabled={selectedOption === null}
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// }

// export default QuestionScreen;



function QuestionScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(null));

  const handleAnswer = (answer) => {
    try {
      console.log(`Answer for question ${currentQuestion + 1}: ${answer}`);

      const updatedSelectedOptions = [...selectedOptions];
      updatedSelectedOptions[currentQuestion] = answer;

      setSelectedOptions(updatedSelectedOptions);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      }
    } catch (error) {
      console.error('Error in handleAnswer:', error);
    }
  };

  const renderQuestion = () => {
    if (currentQuestion >= questions.length) {
      return (
        <div className="question-container">
          <h1>All questions answered. Thank you!</h1>
        </div>
      );
    }

    const currentQuestionData = questions[currentQuestion];

    return (
      <>
        <div className="image-container">
          <img
            src={currentQuestionData.image}
            alt={`question ${currentQuestion + 1}`}
            className="question-image"
          />
          <div className="image-fact">
            {currentQuestionData.imageFact}
          </div>
        </div>
        <div className={`question-container ${currentQuestionData.type === 'slider' ? 'slider-question' : 'mcq-question'}`}>
          <h1>{currentQuestionData.text}</h1>
          {currentQuestionData.type === 'mcq' &&
            currentQuestionData.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className={selectedOptions[currentQuestion] === option ? 'selected' : ''}
              >
                {option}
              </button>
            ))}
          {currentQuestionData.type === 'slider' && (
            <>
              <input
                type="range"
                min={currentQuestionData.min}
                max={currentQuestionData.max}
                step={currentQuestionData.step}
                value={selectedOptions[currentQuestion] === null ? currentQuestionData.min : selectedOptions[currentQuestion]}
                onChange={(e) => {
                  const selectedValue = parseInt(e.target.value);
                  setSelectedOptions((prev) => {
                    const updated = [...prev];
                    updated[currentQuestion] = selectedValue;
                    return updated;
                  });
                }}
              />
              <p>{selectedOptions[currentQuestion] === null ? currentQuestionData.min : selectedOptions[currentQuestion]}</p>
            </>
          )}
        </div>
      </>
    );
  };

  return (
    <div className="QuestionScreen">
      <header className="Screen-header">
        {renderQuestion()}
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
        {/* <button
          onClick={() =>
            setCurrentQuestion((prevQuestion) =>
              Math.min(prevQuestion + 1, questions.length - 1)
            )
          }
          disabled={currentQuestion === questions.length - 1}
        >
          Next
        </button> */}
        <button
          onClick={() => handleAnswer(selectedOptions[currentQuestion])}
          disabled={selectedOptions[currentQuestion] === null}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default QuestionScreen;