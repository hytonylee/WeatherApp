import React from 'react';
import WeatherSingle from './WeatherSingle';
import { weathers } from '../data/weatherData';

const WeatherGroup = (props) => {

    let weatherData = props.weathers;
    let oneDay = {};
    let fiveDays = [];

    const setFiveDays = (data) => {
        for (let i = 0; i <= data.length; i++) {

        }
    }



    const weatherGroup = props.weathers.map(weather => (
        <WeatherSingle
            key={JSON.stringify(weather.key)}
            date={JSON.stringify(weather.date)}
            time={JSON.stringify(weather.time)}
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