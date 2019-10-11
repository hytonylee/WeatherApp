import React from 'react';
import Header from './components/Header';
import InputForm from './components/InputForm';
import WeatherGroup from './components/WeatherGroup';
import Axios from 'axios';
import ErrorBoundary from './components/ErrorBoundary';
require('dotenv').config()

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            weathers: [],
            fiveDays: [],
            isLoading: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let city = this.state.city;
        let country = this.state.country;

        Axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&cnt=40&APPID=${process.env.SECRET_KEY}`)
            .then((response) => {
                let weatherData = response.data.list;
                weatherData.map(weather => {
                    this.setState({
                        isLoading: true,
                        weathers: [...this.state.weathers, {
                            key: weather.dt,
                            date: new Date(weather.dt * 1000).toISOString().slice(0, 10),
                            time: new Date(weather.dt * 1000).toISOString().slice(11, 16),
                            temp: weather.main.temp,
                            weather: weather.weather[0].main
                        }],
                    })
                })

                const groupBy = (arr, property) => {
                    return arr.reduce((weather, x) => {
                        if (!weather[x[property]]) {
                            weather[x[property]] = [];
                        };
                        weather[x[property]].push(x);
                        return weather;
                    })
                }

                this.setState({
                    fiveDays: groupBy(this.state.weathers, 'date')
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
            <ErrorBoundary>
                <Header />
                <i class="wi wi-night-sleet"></i>``
                <InputForm
                    onSubmit={this.handleSubmit} onChange={this.handleChange} />
                <WeatherGroup city={this.state.city} weathers={this.state.weathers} isLoad={this.state.isLoading} />
            </ErrorBoundary>
        )
    }
}

export default App;