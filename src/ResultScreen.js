import React from 'react';
import { useLocation } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import 'chart.js/auto';
import './index.css';
//test
//test 2
Chart.register(
    // Register necessary elements
    'ArcElement',
    'ToolTip',
    'Legend'
);

const ResultScreen = () => {
    const location = useLocation();
    const resultPercentage = location.state && location.state.totalFootprint;
    const vehicleFootprint = location.state && location.state.carFootprint;
    const electricityFootprint = location.state && location.state.electricityFootprint;
    const gasFootprint = location.state && location.state.gasFootprint;
    const commuteFootprint = location.state && location.state.commuteFootprint;
    const airTravelFootprint = location.state && location.state.airTravelFootprint;

    const fact1Text = +((resultPercentage / 1.650027755).toFixed(2));
    const fact2Text = +((resultPercentage / 0.8).toFixed(2));


    const data = {
        labels: ['Private Transport', 'Electricity', 'Gas', 'Public Transport', 'Air Travel'],
        datasets: [
            {
                label: 'Breakdown',
                data: [vehicleFootprint, electricityFootprint, gasFootprint, commuteFootprint, airTravelFootprint],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF9800'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF9800'],
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                position: 'bottom',
            },
        },
        aspectRatio: 1,
    };

    const getLargestCategory = () => {
        const footprints = {
            vehicle: vehicleFootprint,
            electricity: electricityFootprint,
            gas: gasFootprint,
            commute: commuteFootprint,
            airTravel: airTravelFootprint,
        };

        return Object.keys(footprints).reduce((a, b) => footprints[a] > footprints[b] ? a : b);
    };

    const largestCategory = getLargestCategory();

    const renderSuggestions = () => {
        switch (largestCategory) {
            case 'vehicle':
                return <p>It seems that private transport makes up the largest portion of your carbon footprint.<br></br> Consider carpooling, using public transportation, or switching to an electric vehicle to reduce your carbon footprint.<br></br> Moreover, educate others whenever possible about their emissions and continue to play your part to help the planet.</p>;
            case 'electricity':
                return <p>Your electricity consumption contributes the largest part of your carbon footprint. <br></br>Use energy-efficient appliances, turn off lights when not in use, and consider renewable energy sources to lower your electricity consumption.<br></br> Moreover, educate others whenever possible about their emissions and continue to play your part to help the planet.</p>;
            case 'commute':
                return <p>It seems that you are using public transport as much as possible as that is the largest contributor to your carbon footprint.<br></br> Keep up the good work and continue using public transport wherever possible to maintain your low emissions.<br></br> Moreover, educate others whenever possible about their emissions and continue to play your part to help the planet.</p>
            case 'airTravel':
                return <p>Air travel is what makes up the largest part of your carbon footprint. <br></br>Consider taking more direct flights as taking off and landing use more fuel.<br></br> Try packing lighter as the heavier the plane, the more fuel it burns while travelling.<br></br> Consider travelling by train or bus within the country whenever possibe to reduce your carbon footprint.<br></br> Moreover, educate others whenever possible about their emissions and continue to play your part to help the planet.</p>
            case 'gas':
                return <p>Gas comsumption is the main contributor to your carbon footprint.<br></br> Consider switching to more energy efficient appliances or cooking in larger batches and storing leftovers to reduce your emissions.<br></br> Moreover, educate others whenever possible about their emissions and continue to play your part to help the planet.</p>

            default:
                return <p>You have a very well balanced carbon footprint and there is no significant area which is contributing to your emissions. <br></br>Some general tips to reduce your carbon footprint are reducing energy consumption, walking or carpooling whenever possible and properly practicing the reduce, reuse and recycle to reduce your footprint.<br></br> Moreover, educate others whenever possible about their emissions and continue to play your part to help the planet.</p>;
        }
    };


    return (
        <div className='ResultScreen'>
            <div className='ResultBoxes'>
                <div className='result-rectangle'>
                    <div className="result-number">
                        <span>{resultPercentage}</span>
                        <div className='result-number-text'>Tonnes CO2 emitted</div>
                    </div>
                </div>

                <div className='fact-1-rectangle'>
                    <div className='fact-1-text'>
                        You burnt the equivalent of {fact1Text} trees in the Chilgoza forest.
                    </div>
                </div>

                <div className='fact-2-rectangle'>
                    <div className='fact-2-text'>
                        Your emissions were {fact2Text} times the average person.
                    </div>
                </div>
            </div>
            <div className='breakdown-rectangle'>
                <div className='breakdown-text'>The breakdown of your Carbon Footprint is as follows:</div>
                <div className='doughnut-chart'>
                    <Doughnut data={data} options={options}>
                    </Doughnut>
                </div>
            </div>
            <div className='footprint-insights'>
                <div className='footprint-insights-text'>
                    {renderSuggestions()}
                </div>

            </div>
        </div>
    );
};

export default ResultScreen;