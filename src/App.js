import React from 'react';
import Header from './components/Header';
import InputForm from './components/InputForm';
import WeatherGroup from './components/WeatherGroup';
import Axios from 'axios';
require('dotenv').config()

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            weathers: [],
            isLoading: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let city = this.state.city;
        let country = this.state.country;

        this.setState({
            isLoading: true
        })

        Axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&cnt=10&APPID=${process.env.SECRET_KEY}`)
            .then((response) => {
                let weatherData = response.data.list;
                weatherData.map(weather => {
                    let newWeathers = [];
                    let newWeather;
                    newWeather = {
                        date: weather.dt,
                        temp: weather.main.temp,
                        weather: weather.weather[0].main
                    }
                    newWeathers.push(newWeather);
                    this.setState({
                        weathers: [...this.state.weathers, newWeathers]
                    })
                    // debugger
                })
            });
    }

    handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <Header />
                <InputForm
                    onSubmit={this.handleSubmit} onChange={this.handleChange} />
                <WeatherGroup city={this.state.city} weathers={this.state.weathers} isLoad={this.state.isLoading} />
            </div>
        )
    }
}

export default App;

// new Date((weatherInfo.dt * 1000).toISOString()).slice(0, 10)