import React from 'react';
import WeatherSingle from './WeatherSingle';
import { weathers } from '../data/weatherData';

const WeatherGroup = (props) => {

    let weatherFiveDays = []

    for (let i = 0; i < props.weathers.length; i + 5) {

    }

    const weatherGroup = props.weathers.map(weather => (
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
            {weatherGroup}
        </div>
    )
}

export default WeatherGroup;