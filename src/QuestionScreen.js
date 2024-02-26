import React, { useState } from 'react';
import './index.css';
// import spinImage from './assets/spin.png';
import { useHistory } from 'react-router-dom';
import CommuteCar from './commute_car';
import Gas from './gas';
import Electricity from './elec';
import CommutePublicTransport from './PublicTransport'
import Flights from './airtravel';
import Food_print from './food';


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
    image: require('./assets/q1.jpg'),
    imageFact: "Transportation is what usually makes up for the largest portion of an individuals carbon footprint.",
  },
  {
    type: 'mcq',
    text: 'What was your mode of transport?',
    options: ['Car', 'Bike', 'Rickshaw', 'Bus', 'Walk'],
    image: require('./assets/q2.jpg'),
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
    type: 'mcq',
    text: 'What type of fuel does your personal vehicle use?',
    options: [
      'Petrol',
      'Diesel',
      'CNG',
    ],
    image: require('./assets/q1.jpg'),
    imageFact: "Transportation is what usually makes up for the largest portion of an individuals carbon footprint.",
  },
  {
    type: 'slider',
    text: 'Approximately how much did you spend on fuel the last time you refilled your vehicle  (In Rupees)?',
    min: 0,
    max: 25000,
    step: 500,
    image: require('./assets/q4.jpg'),
    imageFact: <div>
      Vehicles that use gasoline emit 2.3 kg CO2/L. <br />
      Vehicles that use diesel emit 2.68 kg CO2/L and <br />
      vehicles that use CNG emit 2.66 kg CO2/L.
    </div>
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
    type: 'mcq',
    text: 'What best describes your diet from yesterday?',
    options: [
      'Vegetarian',
      'Non - Vegetarian',
    ],
    image: require('./assets/q1.jpg'),
    imageFact: "Transportation is what usually makes up for the largest portion of an individuals carbon footprint.",
  },
  {
    type: 'slider',
    text: 'Approximately how much was your electricity bill last month  (In Rupees)?',
    min: 0,
    max: 100000,
    step: 1000,
    image: require('./assets/q6.jpg'),
    imageFact: <div>
      If you don't remember, that's okay. Kindly <a href="https://easybill.pk/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '24px', color: '#1E425E' }}>click here</a> to check your bill.
    </div>
  },
  {
    type: 'slider',
    text: 'Approximately how much was your gas bill last month  (In Rupees)?',
    min: 0,
    max: 50000,
    step: 1000,
    image: require('./assets/q7.jpg'),
    imageFact: <div>
      If you don't remember, that's okay. Kindly <a href="https://fescoonlinebillcheck.pk/sui-gas-bill/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '24px', color: '#1E425E' }}>click here</a> to check your bill.
    </div>
  },
  {
    type: 'slider',
    text: 'How many hours did you spend flying last month for business?',
    min: 0,
    max: 50,
    step: 0.5,
    image: require('./assets/q8.jpg'),
    imageFact: "CO2 emissions from aviation fuel are 3.15 grams per gram of fuel.",
  },
  {
    type: 'slider',
    text: 'How many hours did you spend flying last month for your personal use?',
    min: 0,
    max: 50,
    step: 0.5,
    image: require('./assets/q9.jpg'),
    imageFact: "A Boeing 737-400 travelling at a cruising speed of 780 km per hour emits 90 kg CO2 per passenger per hour.",
  },
];

let q1Ans = 0;
let q2Ans = "";
let q3Ans = 0;
let q4Ans = 0;
let q5Ans = 0;
let q6Ans = 0;
let q7Ans = 0;
let q8Ans = 0;
let q9Ans = 0;
let q10Ans = 0;
let q11Ans = 0;

let carFootprint = 0;
let commuteFootprint = 0;
let gasFootprint = 0;
let electricityFootprint = 0;
let totalFootprint = 0;
let AirTravelFootprint = 0;
let foodprint = 0;


function QuestionScreen() {
  const history = useHistory();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(null));


  const mapAnswerToValue = (questionIndex, answer) => {
    switch (questionIndex) {
      case 0: // Question 1
        switch (answer) {
          case 'Less than 10 minutes':
            return 5;
          case '10-20 mins':
            return 15;
          case '20-30 mins':
            return 25;
          case '30-45 mins':
            return 35;
          case 'More than 45 mins':
            return 50;
          default:
            return 0; // Default value or handle invalid answers
        }
      case 1: // Question 2
        switch (answer) {
          case 'Car':
            return 1;
          case 'Bike':
            return 1;
          case 'Rickshaw':
            return 1;
          case 'Bus':
            return 1;
          case 'Walk':
            return 1;
          default:
            return 0; // Default value or handle invalid answers
        }
      case 3: // Question 4
        switch (answer) {
          case 'Petrol':
            return 1;
          case 'Diesel':
            return 2;
          case 'CNG':
            return 3;
          default:
            return 0; // Default value or handle invalid answers
        }
      // Add similar cases for other questions if needed
      default:
        return 0; // Default value or handle invalid answers
    }
  };


  const handleAnswer = async (answer) => {
    try {
      console.log(`Answer for question ${currentQuestion + 1}: ${answer}`);

      const mappedValue = mapAnswerToValue(currentQuestion, answer);

      switch (currentQuestion) {
        case 0:
          q1Ans = mappedValue;
          break;
        case 1:
          q2Ans = answer;
          break;
        case 2:
          q3Ans = answer;
          break;
        case 3:
          q4Ans = mappedValue;
          break;
        case 4:
          q5Ans = answer;
          break;
        case 5:
          q6Ans = answer;
          break;
        case 6:
          q7Ans = answer;
          break;
        case 7:
          q8Ans = answer;
          break
        case 8:
          q9Ans = answer;
          break
        case 9:
          q10Ans = answer;
          break
        case 10:
          q11Ans = answer;
          break
        // case 
        default:
          break;
      }
      if (currentQuestion === 10) {  // Assuming question 2 is related to commuting by car
        const myvehicle = new CommutePublicTransport(q2Ans, q1Ans, q3Ans);  // Adjust this based on your data structure

        // Use the imported function to calculate the carbon footprint
        commuteFootprint = myvehicle.getCarbonFootprintRickshaw();

        // Log or use the calculated carbon footprint as needed
        // console.log('Calculated commute footprint:', commuteFootprint);
        const mycar = new CommuteCar(q4Ans, 2);
        carFootprint = mycar.get_footprint(q5Ans);
        // console.log('Calculated car footprint:', carFootprint);

        const my_foodprint = new Food_print(q7Ans);
        foodprint = my_foodprint.getCarbonFootprint();

        const gasInstance = new Gas(q9Ans / q6Ans);
        gasFootprint = gasInstance.getCarbonFootprint();
        // console.log('Calculated gas footprint:', gasFootprint);


        const electricityInstance = new Electricity(q8Ans / q6Ans);
        electricityFootprint = electricityInstance.getCarbonFootprint();
        // console.log('Calculated electricity footprint:', electricityFootprint);


        const air = new Flights(q10Ans, q11Ans);
        AirTravelFootprint = air.getFootprints();
        // console.log('Calculated air footprint:', AirTravelFootprint);

      }

      // console.log('q1 ans: %d', q1Ans);
      // console.log('q2 ans: %d', q2Ans);
      const updatedSelectedOptions = [...selectedOptions];
      updatedSelectedOptions[currentQuestion] = answer;

      setSelectedOptions(updatedSelectedOptions);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // All questions answered, navigate to ResultScreen
        // totalFootprint = carFootprint + electricityFootprint + gasFootprint + commuteFootprint + AirTravelFootprint;
        // const roundedTotalFootprint = parseFloat(totalFootprint.toFixed(2));
        // console.log("total footprint:", roundedTotalFootprint);
        // history.push('/result', { totalFootprint: roundedTotalFootprint });
        totalFootprint = carFootprint + electricityFootprint + gasFootprint + commuteFootprint + AirTravelFootprint;

        // Round individual footprints to 2 decimal places
        const roundedCarFootprint = parseFloat(carFootprint.toFixed(2));
        const roundedElectricityFootprint = parseFloat(electricityFootprint.toFixed(2));
        const roundedGasFootprint = parseFloat(gasFootprint.toFixed(2));
        const roundedCommuteFootprint = parseFloat(commuteFootprint.toFixed(2));
        const roundedFoodFootprint = parseFloat(foodprint.toFixed(2));
        const roundedAirTravelFootprint = parseFloat(AirTravelFootprint.toFixed(2));

        // Create an object containing individual and total footprints
        const footprintsData = {
          carFootprint: roundedCarFootprint,
          electricityFootprint: roundedElectricityFootprint,
          gasFootprint: roundedGasFootprint,
          commuteFootprint: roundedCommuteFootprint,
          airTravelFootprint: roundedAirTravelFootprint,
          foodFootprint: roundedFoodFootprint,
          totalFootprint: parseFloat(totalFootprint.toFixed(2)),
        };

        // Log and push to results screen
        console.log("Individual Footprints:", footprintsData);
        history.push('/result', footprintsData);


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
      <div className='question-screen-container'>
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
              onClick={() => handleAnswer(selectedOptions[currentQuestion])}
              disabled={selectedOptions[currentQuestion] === null}
            >
              Next
            </button>
          </div>
          <div className='question-tracker'>
            Question {currentQuestion + 1} of 10
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="QuestionScreen">
      {renderQuestion()}
    </div>
  );
}

export default QuestionScreen;