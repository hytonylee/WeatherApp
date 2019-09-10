import React from 'react';
import WeatherSingle from './WeatherSingle';
import { weathers } from '../data/weatherData';

const WeatherGroup = () => {
    const WeatherGroup = weathers.map(weather => (
        <WeatherSingle day={weather.day} weather={weather.weather} temperature={weather.temperature} />
    ))

    return (
        <div className='weatherContainer'>
            {WeatherGroup}
        </div>
    )
}

export default WeatherGroup;