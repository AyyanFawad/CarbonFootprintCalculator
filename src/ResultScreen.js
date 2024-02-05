import React from 'react';
import { useLocation } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import 'chart.js/auto';
import './index.css';
//test
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


    const data = {
        labels: ['Vehicle', 'Electricity', 'Gas', 'Commute', 'Air Travel'],
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
                        Your footprint is equal to x tonnes.
                    </div>
                </div>

                <div className='fact-2-rectangle'>
                    <div className='fact-2-text'>
                        The average Pakistani emits xyz tonnes daily.
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
        </div>
    );
};

export default ResultScreen;