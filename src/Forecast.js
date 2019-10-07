import React from 'react';
import './forecast.css';

const Forecast = (props) => {
  const { forecast } = props
  return (
    <div className="Forecast">
      <h3>Date: {forecast.date}</h3>
      <h4>Day: {forecast.day}</h4>
      <h5>High: {forecast.forecast.high}</h5>
      <h5>Low: {forecast.forecast.low}</h5>
    </div>
  );
}

export default Forecast;