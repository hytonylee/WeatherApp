import React from 'react';
import WeatherSingle from './WeatherSingle';
import { weathers } from '../data/weatherData';

const WeatherGroup = (props) => {
    const WeatherGroup = weathers.map(weather => (
        <WeatherSingle key={weather.id} day={weather.day} weather={weather.weather} temperature={weather.temperature} />
    ))

    return (
        <div className='weatherContainer'>
            <h2>{props.city}</h2>
            {WeatherGroup}
        </div>
    )
}

export default WeatherGroup;