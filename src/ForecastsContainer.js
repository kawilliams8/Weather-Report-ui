import React from 'react';
import Forecast from './Forecast';
import './ForecastsContainer.css';

const ForecastsContainer = (props) => {
  let forecastCards = props.forecasts.map(forecast => {
    return <Forecast key={forecast.id} forecast={forecast}/>
  })
  return (
    <div className="ForecastsContainer">
      {forecastCards}
    </div>
  )
}

export default ForecastsContainer;