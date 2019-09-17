import React from 'react';
import WeatherSingle from './WeatherSingle';
import ErrorBoundary from './ErrorBoundary'
import { weathers } from '../data/weatherData';

const WeatherGroup = (props) => {
    // const WeatherGroup = weathers.map(weather => (
    //     <WeatherSingle key={weather.id} day={weather.day} weather={weather.weather} temperature={weather.temperature} />
    // ))
    const WeatherGroup = props.weathers.map(weather => (
        <WeatherSingle key={weather.date} date={weather.date} weather={weather.weather} temperature={weather.temp} />
    ))

    return (
        <ErrorBoundary>
            <div className='weatherContainer'>
                <h2>{props.city}</h2>
                {WeatherGroup}
            </div>
        </ErrorBoundary>
    )
}

export default WeatherGroup;