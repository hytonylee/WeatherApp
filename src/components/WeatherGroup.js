import React from 'react';
import WeatherSingle from './WeatherSingle';
import { weathers } from '../data/weatherData';

const WeatherGroup = (props) => {
    const WeatherGroup = props.weathers.map(weather => (
        <WeatherSingle
            key={JSON.stringify(weather.date)}
            date={JSON.stringify(weather.date)}
            weather={JSON.stringify(weather.weather)}
            temperature={JSON.stringify(weather.temp)}
        />
    ))

    return (
        <div className='weatherContainer'>
            <h2>{props.city}</h2>
            {WeatherGroup}
        </div>
    )
}

export default WeatherGroup;